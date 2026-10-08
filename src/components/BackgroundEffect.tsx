import React, { useEffect, useState } from 'react';

export const BackgroundEffect: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Center Subtle Accent Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[400px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Mouse Follow Ambient Spotlight (desktop only) */}
      <div
        className="hidden md:block absolute w-[600px] h-[600px] rounded-full bg-indigo-500/[0.035] blur-[100px] transition-transform duration-700 ease-out -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        }}
      />
    </div>
  );
};
