
import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

const FluidBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<{
    x: number, 
    y: number, 
    size: number, 
    speedX: number, 
    speedY: number, 
    color: string,
    life: number,
    maxLife: number
  }[]>([]);
  const { theme } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = -100; // Start offscreen
    let mouseY = -100; // Start offscreen
    let lastSpawnTime = 0;
    const spawnInterval = 80; // Decreased interval for more particles
    const maxParticles = 200; // Increased maximum number of particles
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Create particles from cursor movement
    const createParticlesFromCursor = (timestamp: number) => {
      // Only spawn particles if mouse has moved into the canvas area
      const mouseInView = mouseX >= 0 && mouseY >= 0 && mouseX <= canvas.width && mouseY <= canvas.height;
      
      // Only spawn particles if we're under the maximum limit
      if (mouseInView && timestamp - lastSpawnTime > spawnInterval && particlesRef.current.length < maxParticles) {
        lastSpawnTime = timestamp;
        
        // Base color - consistent orange for both themes
        const baseColor = '255, 165, 0'; // Orange
          
        // Increased number of particles per interval
        const particlesToAdd = Math.floor(Math.random() * 3) + 2; // 2-4 particles
        
        for (let i = 0; i < particlesToAdd; i++) {
          // Calculate random angle and distance from cursor
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * 15;
          
          const newParticle = {
            x: mouseX + Math.cos(angle) * distance,
            y: mouseY + Math.sin(angle) * distance,
            size: Math.random() * 4 + 2, // Slightly larger particles
            speedX: Math.cos(angle) * (Math.random() * 0.5 + 0.2),
            speedY: Math.sin(angle) * (Math.random() * 0.5 + 0.2),
            color: `rgba(${baseColor}, ${Math.random() * 0.7 + 0.3})`,
            life: Math.random() * 150 + 100, // Shorter lifespan to prevent buildup
            maxLife: 250
          };
          
          particlesRef.current.push(newParticle);
        }
      }
    };

    const drawParticles = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create particles from cursor position
      createParticlesFromCursor(timestamp);
      
      // Update and draw particles
      particlesRef.current = particlesRef.current
        .filter(particle => particle.life > 0)
        .map(particle => {
          // Update life - faster decay for older particles to prevent buildup
          const lifePercentage = particle.life / particle.maxLife;
          const decayRate = lifePercentage < 0.3 ? 1.0 : 0.5; // Faster decay when near end of life
          const updatedLife = particle.life - decayRate;
          
          // Calculate opacity based on life percentage
          const lifeRatio = updatedLife / particle.maxLife;
          
          // Update position
          const updatedX = particle.x + particle.speedX;
          const updatedY = particle.y + particle.speedY;
          
          // Boundary check with wraparound
          let newX = updatedX;
          let newY = updatedY;
          
          if (newX < 0) newX = canvas.width;
          if (newX > canvas.width) newX = 0;
          if (newY < 0) newY = canvas.height;
          if (newY > canvas.height) newY = 0;
          
          // Draw the particle
          const size = particle.size * lifeRatio;
          const opacity = Math.max(0, Math.min(1, lifeRatio * 0.7));
          const particleColor = particle.color.replace(/[\d.]+\)$/g, `${opacity})`);
          
          if (size > 0) {
            ctx.beginPath();
            ctx.arc(newX, newY, size, 0, Math.PI * 2);
            ctx.fillStyle = particleColor;
            ctx.fill();
            
            // Add glow effect
            ctx.shadowBlur = 4;
            ctx.shadowColor = particleColor;
          }
          
          return {
            ...particle,
            x: newX,
            y: newY,
            life: updatedLife,
          };
        });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const animate = (timestamp: number) => {
      drawParticles(timestamp);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Also update position on touch devices
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      }
    };

    // Add mouse leave event to stop spawning particles when cursor leaves window
    const handleMouseLeave = () => {
      mouseX = -100;
      mouseY = -100;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    resize();
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full" 
      style={{ zIndex: 0 }}
    />
  );
};

export default FluidBackground;
