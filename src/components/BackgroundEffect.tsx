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

    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      activation: number;
      baseRadius: number;
      neighbors: Node[];

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.activation = 0;
        this.baseRadius = Math.random() * 1.5 + 0.5;
        this.neighbors = [];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
        
        if (this.activation > 0) {
          this.activation -= 0.015; // Smooth fade out
        }
        if (this.activation < 0) this.activation = 0;
      }

      draw(ctx: CanvasRenderingContext2D, dark: boolean) {
        const radius = this.baseRadius + this.activation * 3;
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
        
        if (dark) {
          ctx.fillStyle = `rgba(229, 9, 20, ${0.15 + this.activation * 0.85})`;
          if (this.activation > 0.1) {
            ctx.shadowBlur = this.activation * 15;
            ctx.shadowColor = 'rgba(229, 9, 20, 0.8)';
          }
        } else {
          ctx.fillStyle = `rgba(229, 9, 20, ${0.1 + this.activation * 0.7})`;
          if (this.activation > 0.1) {
            ctx.shadowBlur = this.activation * 10;
            ctx.shadowColor = 'rgba(229, 9, 20, 0.5)';
          }
        }
        
        ctx.fill();
        ctx.shadowBlur = 0; // Reset performance
      }
    }

    class Pulse {
      startX: number;
      startY: number;
      target: Node;
      progress: number;
      speed: number;
      strength: number;

      constructor(startX: number, startY: number, target: Node, strength: number) {
        this.startX = startX;
        this.startY = startY;
        this.target = target;
        this.progress = 0;
        this.strength = strength;
        
        const dx = target.x - startX;
        const dy = target.y - startY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        this.speed = 4 / Math.max(dist, 1); // Travel at constant pixel speed
      }

      update(): boolean {
        this.progress += this.speed;
        if (this.progress >= 1) {
           this.target.activation = Math.min(this.target.activation + this.strength, 1);
           return true; // reached destination
        }
        return false;
      }

      draw(ctx: CanvasRenderingContext2D, dark: boolean) {
        const x = this.startX + (this.target.x - this.startX) * this.progress;
        const y = this.startY + (this.target.y - this.startY) * this.progress;
        
        ctx.beginPath();
        const size = Math.max(1, 2.5 * this.strength);
        ctx.arc(x, y, size, 0, Math.PI * 2);
        
        if (dark) {
          ctx.fillStyle = `rgba(255, 255, 255, ${this.strength})`;
          ctx.shadowBlur = 12 * this.strength;
          ctx.shadowColor = 'rgba(255, 100, 100, 1)';
        } else {
          ctx.fillStyle = `rgba(229, 9, 20, ${this.strength})`;
          ctx.shadowBlur = 8 * this.strength;
          ctx.shadowColor = 'rgba(229, 9, 20, 0.6)';
        }
        
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const nodes: Node[] = [];
    let pulses: Pulse[] = [];
    const nodeCount = Math.floor((width * height) / 15000); 
    const connectionDist = 140;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node());
    }

    let mouse = { x: -1000, y: -1000 };
    let lastMouse = { x: -1000, y: -1000 };

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const dark = isDark();

      // Recalculate neighbors dynamically
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].neighbors = [];
        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          if (dx * dx + dy * dy < connectionDist * connectionDist) {
            nodes[i].neighbors.push(nodes[j]);
          }
        }
      }

      // Draw faint background connections
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (const neighbor of nodes[i].neighbors) {
          // Prevent double drawing by checking object reference order visually
          if (nodes.indexOf(neighbor) > i) {
            const dx = nodes[i].x - neighbor.x;
            const dy = nodes[i].y - neighbor.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const alpha = 1 - (dist / connectionDist);
            
            ctx.beginPath();
            ctx.strokeStyle = dark 
              ? `rgba(229, 9, 20, ${alpha * 0.15})`
              : `rgba(229, 9, 20, ${alpha * 0.1})`;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(neighbor.x, neighbor.y);
            ctx.stroke();
          }
        }
      }

      // Mouse data injection (Spawn pulses on fast movement)
      const mouseDist = Math.sqrt(Math.pow(mouse.x - lastMouse.x, 2) + Math.pow(mouse.y - lastMouse.y, 2));
      if (mouseDist > 5) {
        // Find 1-2 nearest nodes to inject data
        const sorted = [...nodes].sort((a, b) => {
          const d1 = Math.pow(a.x - mouse.x, 2) + Math.pow(a.y - mouse.y, 2);
          const d2 = Math.pow(b.x - mouse.x, 2) + Math.pow(b.y - mouse.y, 2);
          return d1 - d2;
        });
        
        // Spawn 1 pulse to the absolute closest node every frame the mouse moves fast
        if (sorted.length > 0 && Math.random() > 0.5) {
            pulses.push(new Pulse(mouse.x, mouse.y, sorted[0], 0.8 + Math.random() * 0.2));
        }
      }

      // Draw subtle mouse glow
      if (mouse.x > 0) {
        const glowGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 400);
        glowGrad.addColorStop(0, dark ? 'rgba(229, 9, 20, 0.08)' : 'rgba(229, 9, 20, 0.04)');
        glowGrad.addColorStop(1, 'rgba(229, 9, 20, 0)');
        ctx.fillStyle = glowGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // Update and draw nodes
      for (const node of nodes) {
        node.update();
        node.draw(ctx, dark);
      }

      // Update and draw pulses (Cascade logic)
      const survivingPulses: Pulse[] = [];
      for (const pulse of pulses) {
        const completed = pulse.update();
        pulse.draw(ctx, dark);

        if (completed) {
          // Data reached node. Splash to neighbors!
          const neighbors = pulse.target.neighbors;
          const newStrength = pulse.strength * 0.7; // Decay strength
          
          if (newStrength > 0.15) {
            // Pick a few random neighbors to propagate to
            for (const neighbor of neighbors) {
              if (Math.random() > 0.4) {
                 survivingPulses.push(new Pulse(pulse.target.x, pulse.target.y, neighbor, newStrength));
              }
            }
          }
        } else {
          survivingPulses.push(pulse);
        }
      }
      pulses = survivingPulses;

      lastMouse = { ...mouse };
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY };
    };
    
    const handleMouseOut = () => {
      mouse = { x: -1000, y: -1000 };
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
