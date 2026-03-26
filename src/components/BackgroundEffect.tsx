import { useEffect, useRef } from 'react';

const BackgroundEffect = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return;
      // Use requestAnimationFrame for smooth performance
      requestAnimationFrame(() => {
        if (!bgRef.current) return;
        bgRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(229, 9, 20, 0.05), transparent 40%)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={bgRef}
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
    />
  );
};

export default BackgroundEffect;
