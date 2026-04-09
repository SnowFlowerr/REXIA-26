import { useEffect, useRef } from 'react';
import styles from './StarField.module.css';

const StarField = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resize();

    // Create stars in 3 layers (near, mid, far)
    const createStars = () => {
      const stars = [];
      const count = Math.min(400, Math.floor((width * height) / 3000));
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.3,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.3 + 0.05,
          layer: Math.floor(Math.random() * 3), // 0=far, 1=mid, 2=near
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
      // Add some brighter accent stars
      for (let i = 0; i < 15; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2 + 1.5,
          opacity: 0.9,
          speed: 0.02,
          layer: 2,
          twinkleSpeed: Math.random() * 0.03 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
          color: Math.random() > 0.5 ? '#b44aff' : '#00d4ff',
        });
      }
      return stars;
    };

    starsRef.current = createStars();

    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / width - 0.5) * 2;
      mouseRef.current.y = (e.clientY / height - 0.5) * 2;
    };

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.016;

      starsRef.current.forEach((star) => {
        const parallaxFactor = (star.layer + 1) * 3;
        const px = star.x + mouseRef.current.x * parallaxFactor;
        const py = star.y + mouseRef.current.y * parallaxFactor;
        const twinkle = Math.sin(time * star.twinkleSpeed * 60 + star.twinklePhase) * 0.3 + 0.7;
        const alpha = star.opacity * twinkle;

        ctx.beginPath();
        ctx.arc(px, py, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color
          ? star.color.replace(')', `, ${alpha})` ).replace('rgb', 'rgba').replace('#b44aff', `rgba(180,74,255,${alpha})`).replace('#00d4ff', `rgba(0,212,255,${alpha})`)
          : `rgba(238, 240, 246, ${alpha})`;

        if (star.color) {
          ctx.fillStyle = star.color === '#b44aff'
            ? `rgba(180,74,255,${alpha})`
            : `rgba(0,212,255,${alpha})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = star.color;
        } else {
          ctx.fillStyle = `rgba(238, 240, 246, ${alpha})`;
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0;

        // Slow drift upward
        star.y -= star.speed;
        if (star.y < -5) {
          star.y = height + 5;
          star.x = Math.random() * width;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
};

export default StarField;
