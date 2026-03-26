import { useEffect, useRef } from 'react';

const BackgroundEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false }); // Optimize for rendering solid background
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const isDark = () => document.documentElement.classList.contains('dark');

    let particles: Particle[] = [];
    const isMobile = width < 768;
    // Strict limits for smooth 60fps and battery saving on all devices
    const particleCount = isMobile ? 250 : Math.min(800, Math.floor((width * height) / 2500));
    
    // Flow field grid resolution
    const resolution = isMobile ? 50 : 35; 
    let cols = Math.ceil(width / resolution) + 1;
    let rows = Math.ceil(height / resolution) + 1;
    let flowField: number[] = new Array(cols * rows).fill(0);
    
    let zoff = 0; // Evolution over time

    class Particle {
      x: number; 
      y: number;
      vx: number; 
      vy: number;
      maxSpeed: number;
      colorAlpha: number; 
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = 0;
        this.vy = 0;
        this.maxSpeed = 1.5 + Math.random() * 2;
        this.colorAlpha = 0.1 + Math.random() * 0.4;
      }
      
      update(mouseX: number, mouseY: number) {
        let xOff = Math.floor(this.x / resolution);
        let yOff = Math.floor(this.y / resolution);
        
        if (xOff > cols - 1) xOff = cols - 1;
        if (xOff < 0) xOff = 0;
        if (yOff > rows - 1) yOff = rows - 1;
        if (yOff < 0) yOff = 0;
        
        const index = xOff + yOff * cols;
        const angle = flowField[index];
        
        // Natural flow steering
        const forceX = Math.cos(angle) * 0.4;
        const forceY = Math.sin(angle) * 0.4;
        
        this.vx += forceX;
        this.vy += forceY;
        
        // Massive Mouse Repulsion (Swirling Vortex)
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distSq = dx*dx + dy*dy;
        
        if (distSq > 0 && distSq < 60000) { // ~245px radius
          const dist = Math.sqrt(distSq);
          const force = (60000 - distSq) / 60000; // 1 at center, 0 at edge
          
          // Tangent to create SWIRL instead of just pushing away linearly
          const tx = -dy / dist;
          const ty = dx / dist;
          
          this.vx += tx * force * 4 - (dx / dist) * force * 6;
          this.vy += ty * force * 4 - (dy / dist) * force * 6;
        }
        
        // Velocity limits
        const speedSq = this.vx*this.vx + this.vy*this.vy;
        if (speedSq > this.maxSpeed * this.maxSpeed) {
           const speed = Math.sqrt(speedSq);
           this.vx = (this.vx / speed) * this.maxSpeed;
           this.vy = (this.vy / speed) * this.maxSpeed;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Wrap around seamlessly
        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        if (this.y < 0) this.y = height;
      }
      
      draw(ctx: CanvasRenderingContext2D, dark: boolean) {
        ctx.beginPath();
        // Drawing short lines depending on velocity creates silk strands
        ctx.moveTo(this.x - this.vx * 2, this.y - this.vy * 2);
        ctx.lineTo(this.x, this.y);
        
        if (dark) {
           ctx.strokeStyle = `rgba(229, 9, 20, ${this.colorAlpha})`;
        } else {
           ctx.strokeStyle = `rgba(229, 9, 20, ${this.colorAlpha * 1.2})`;
        }
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
    }

    const initParticles = () => {
       particles = [];
       for (let i = 0; i < particleCount; i++) particles.push(new Particle());
    };
    
    const initGrid = () => {
      cols = Math.ceil(width / resolution) + 1;
      rows = Math.ceil(height / resolution) + 1;
      flowField = new Array(cols * rows).fill(0);
    };

    initGrid();
    initParticles();
    
    let mouse = { x: -1000, y: -1000 };
    let animationFrameId: number;

    const animate = () => {
      const dark = isDark();

      // Core creative trick: Do NOT clear rect! 
      // Paint over perfectly with 10% opacity black/white to leave a smooth trailing history.
      // This weaves the tiny particles into gorgeous continuous silk ribbons.
      ctx.fillStyle = dark ? 'rgba(10, 10, 10, 0.1)' : 'rgba(250, 250, 250, 0.1)';
      ctx.fillRect(0, 0, width, height);

      // Procedural Mathematics to simulate fluid curl noise per cell
      let xoff = 0;
      for (let x = 0; x < cols; x++) {
        let yoff = 0;
        for (let y = 0; y < rows; y++) {
          const index = x + y * cols;
          // Complex trig blending acts perfectly as smooth flowing noise
          const angle = Math.sin(xoff + zoff) * 2 + Math.cos(yoff + zoff) * 1.5;
          flowField[index] = angle;
          yoff += 0.15;
        }
        xoff += 0.15;
      }
      zoff += 0.003; // Sluggish, luxurious evolution speed

      // Let particles weave into the flow
      ctx.lineCap = 'round';
      for (const p of particles) {
        p.update(mouse.x, mouse.y);
        p.draw(ctx, dark);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initGrid();
      initParticles(); 
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleMouseOut = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-300 w-full h-full"
    />
  );
};

export default BackgroundEffect;
