import { useEffect, useRef, useState } from 'react';
import styles from './CursorGlow.module.css';

const CursorGlow = () => {
  const glowRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // On touch devices, hide cursor glow
    if ('ontouchstart' in window) return;

    const handleMouseMove = (e) => {
      if (!visible) setVisible(true);
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [visible]);

  if ('ontouchstart' in (typeof window !== 'undefined' ? window : {})) return null;

  return (
    <div
      ref={glowRef}
      className={`${styles.glow} ${visible ? styles.visible : ''}`}
    />
  );
};

export default CursorGlow;
