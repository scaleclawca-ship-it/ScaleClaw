import { useEffect, useRef } from 'react';

const BackgroundEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const isDark = () => document.documentElement.classList.contains('dark');

    // Grid configuration
    const spacing = 45;
    let cols = 0;
    let rows = 0;

    class Point {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      length: number;
      angle: number;

      constructor(x: number, y: number) {
        this.baseX = x;
        this.baseY = y;
        this.x = x;
        this.y = y;
        this.length = 0;
        this.angle = 0;
      }

      update(mouseX: number, mouseY: number) {
        const dx = mouseX - this.baseX;
        const dy = mouseY - this.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        const targetAngle = Math.atan2(dy, dx);
        
        // Influence range 400px
        const influence = Math.max(0, 1 - dist / 400);
        
        // The closer the mouse, the longer the line stretches
        const targetLength = influence * 25; 
        
        // Slight parallax displacement towards the mouse
        const targetX = this.baseX + Math.cos(targetAngle) * (influence * 12);
        const targetY = this.baseY + Math.sin(targetAngle) * (influence * 12);

        // Fluid physics interpolation
        this.x += (targetX - this.x) * 0.12;
        this.y += (targetY - this.y) * 0.12;
        this.length += (targetLength - this.length) * 0.15;
        
        // Wrap angle for shortest path interpolation rotation
        let angleDiff = targetAngle - this.angle;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        this.angle += angleDiff * 0.2;
      }

      draw(ctx: CanvasRenderingContext2D, dark: boolean) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        // Determine colors based on how stretched the point is
        const influence = Math.min(1, this.length / 25);
        
        ctx.beginPath();
        // If length is near 0, it renders as a tiny resting dot
        const renderLength = Math.max(0.5, this.length);
        ctx.moveTo(-renderLength, 0);
        ctx.lineTo(renderLength, 0);

        if (dark) {
          // Resting: Faint white -> Active: Bright glowing ScaleClaw red
          const r = 255 - influence * (255 - 229);
          const g = 255 - influence * (255 - 9);
          const b = 255 - influence * (255 - 20);
          const alpha = 0.08 + influence * 0.8;
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          ctx.lineWidth = 1.5 + influence * 2;
          
          if (influence > 0.15) {
             ctx.shadowBlur = influence * 15;
             ctx.shadowColor = 'rgba(229, 9, 20, 0.8)';
          }
        } else {
          // Resting: Faint gray -> Active: Deep red
          const r = 160 + influence * (229 - 160);
          const g = 160 + influence * (9 - 160);
          const b = 160 + influence * (20 - 160);
          const alpha = 0.2 + influence * 0.6;
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          ctx.lineWidth = 1.5 + influence * 1.5;
        }

        ctx.stroke();
        ctx.restore();
      }
    }

    let points: Point[] = [];

    const initGrid = () => {
      points = [];
      cols = Math.ceil(width / spacing) + 1;
      rows = Math.ceil(height / spacing) + 1;
      const offsetX = (width - (cols - 1) * spacing) / 2;
      const offsetY = (height - (rows - 1) * spacing) / 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
           points.push(new Point(offsetX + i * spacing, offsetY + j * spacing));
        }
      }
    };

    initGrid();

    let mouse = { x: -1000, y: -1000 };
    let targetMouse = { x: -1000, y: -1000 };
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const dark = isDark();

      mouse.x += (targetMouse.x - mouse.x) * 0.15;
      mouse.y += (targetMouse.y - mouse.y) * 0.15;

      // Draw subtle mouse ambient glow
      if (mouse.x > 0) {
        const glowGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 600);
        glowGrad.addColorStop(0, dark ? 'rgba(229, 9, 20, 0.05)' : 'rgba(229, 9, 20, 0.03)');
        glowGrad.addColorStop(1, 'rgba(229, 9, 20, 0)');
        ctx.fillStyle = glowGrad;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.lineCap = 'round';
      
      for (const p of points) {
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
      initGrid(); // Rebuild grid strictly to fit new screen
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (mouse.x === -1000) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }
      targetMouse.x = e.clientX;
      targetMouse.y = e.clientY;
    };
    
    // Move target mouse entirely off screen when leaving window
    const handleMouseOut = () => {
      targetMouse.x = -1000;
      targetMouse.y = -1000;
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
      className="pointer-events-none fixed inset-0 z-0 bg-transparent transition-opacity duration-300"
    />
  );
};

export default BackgroundEffect;
