import { useEffect, useRef } from 'react';
import styles from './ShootingStars.module.css';

const ShootingStars = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createStar = () => {
      const star = document.createElement('div');
      star.className = styles.star;

      const startX = Math.random() * 100;
      const startY = Math.random() * 40;
      const angle = Math.random() * 30 + 20; // 20-50 degrees
      const duration = Math.random() * 1.5 + 0.5;
      const length = Math.random() * 150 + 80;

      star.style.cssText = `
        left: ${startX}%;
        top: ${startY}%;
        --angle: ${angle}deg;
        --duration: ${duration}s;
        --length: ${length}px;
      `;

      container.appendChild(star);

      setTimeout(() => {
        if (star.parentNode) star.parentNode.removeChild(star);
      }, duration * 1000 + 200);
    };

    // Create shooting stars periodically
    const interval = setInterval(() => {
      if (Math.random() > 0.4) { // 60% chance each tick
        createStar();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className={styles.container} />;
};

export default ShootingStars;
