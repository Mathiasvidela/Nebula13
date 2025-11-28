import React, { useEffect, useRef } from 'react';
import { Mic, Music, Sliders } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;
    let stars = [];
    let galaxies = [];
    let mouse = { x: null, y: null };

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      // Galaxies (Nebulae)
      galaxies = [];
      const numGalaxies = 3;
      const galaxyColors = ['rgba(160, 32, 240, 0.15)', 'rgba(0, 0, 255, 0.1)', 'rgba(255, 0, 255, 0.1)'];
      
      for (let i = 0; i < numGalaxies; i++) {
        galaxies.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 300 + 200,
          color: galaxyColors[i % galaxyColors.length],
          vx: (Math.random() - 0.5) * 0.05,
          vy: (Math.random() - 0.5) * 0.05
        });
      }

      // Stars
      stars = [];
      const numStars = Math.floor((width * height) / 2500);

      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        stars.push({
          x: x, // Current position
          y: y,
          originX: x, // Target "home" position
          originY: y,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          radius: Math.random() * 1.5 + 0.5,
          baseAlpha: Math.random() * 0.7 + 0.3,
          alpha: 0,
        });
        stars[i].alpha = stars[i].baseAlpha;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw Galaxies
      galaxies.forEach(galaxy => {
        const gradient = ctx.createRadialGradient(galaxy.x, galaxy.y, 0, galaxy.x, galaxy.y, galaxy.radius);
        gradient.addColorStop(0, galaxy.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(galaxy.x, galaxy.y, galaxy.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Move galaxies
        galaxy.x += galaxy.vx;
        galaxy.y += galaxy.vy;
        
        if (galaxy.x < -galaxy.radius) galaxy.x = width + galaxy.radius;
        if (galaxy.x > width + galaxy.radius) galaxy.x = -galaxy.radius;
        if (galaxy.y < -galaxy.radius) galaxy.y = height + galaxy.radius;
        if (galaxy.y > height + galaxy.radius) galaxy.y = -galaxy.radius;
      });

      // Draw Stars
      stars.forEach(star => {
        // Move origin
        star.originX += star.vx;
        star.originY += star.vy;

        // Wrap origins
        if (star.originX < 0) star.originX = width;
        if (star.originX > width) star.originX = 0;
        if (star.originY < 0) star.originY = height;
        if (star.originY > height) star.originY = 0;

        // Interaction
        let targetX = star.originX;
        let targetY = star.originY;
        let targetAlpha = star.baseAlpha;
        let targetRadius = star.radius;

        if (mouse.x != null) {
          const dx = mouse.x - star.x;
          const dy = mouse.y - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const repulsionRadius = 200;

          if (distance < repulsionRadius) {
            const force = (repulsionRadius - distance) / repulsionRadius;
            const angle = Math.atan2(dy, dx);
            
            // Push away
            const push = force * 100; // Strength
            targetX -= Math.cos(angle) * push;
            targetY -= Math.sin(angle) * push;

            targetAlpha = 1;
            targetRadius = star.radius * 2.5;
          }
        }

        // Physics (Lerp towards target)
        star.x += (targetX - star.x) * 0.1; // Smoothness factor
        star.y += (targetY - star.y) * 0.1;
        star.alpha += (targetAlpha - star.alpha) * 0.1;

        // Draw
        ctx.beginPath();
        ctx.arc(star.x, star.y, targetRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });

      // Draw connections
      if (mouse.x != null) {
        stars.forEach(star => {
          const dx = mouse.x - star.x;
          const dy = mouse.y - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(160, 32, 240, ${0.6 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        });
      }

      requestAnimationFrame(draw);
    };

    const handleResize = () => init();
    const handleMouseMove = (e) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      // Check if mouse is within the hero section
      if (
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right
      ) {
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      } else {
        mouse.x = null;
        mouse.y = null;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    // No need for mouseleave on canvas since we check bounds in mousemove

    init();
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <img src="/logoHeader.svg" alt="Nebula 13 Logo" className="hero-logo" />
        <p className="hero-subtitle">
          Grabá, mezclá y masterizá tus temas con sonido pro, sin perder la esencia de la calle.
        </p>

        <div className="hero-features">
          <div className="feature-item">
            <Mic className="feature-icon" />
            <span>Grabación</span>
          </div>
          <div className="feature-item">
            <Sliders className="feature-icon" />
            <span>Mezcla & Master</span>
          </div>
          <div className="feature-item">
            <Music className="feature-icon" />
            <span>Beats</span>
          </div>
        </div>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Reservar Sesión Ahora
          </a>
          <a href="#work" className="btn btn-secondary">
            Escuchá nuestros trabajos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
