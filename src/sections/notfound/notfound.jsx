import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  const navigate = useNavigate();
  const starsRef = useRef(null);

  useEffect(() => {
    const container = starsRef.current;
    if (!container) return;
    for (let i = 0; i < 80; i++) {
      const s = document.createElement('div');
      s.className = styles.star;
      const size = Math.random() * 2.5 + 0.5;
      s.style.cssText = `
        width:${size}px;height:${size}px;
        left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        --d:${2 + Math.random() * 4}s;--delay:${Math.random() * 4}s;
        opacity:${Math.random() * 0.5 + 0.1}
      `;
      container.appendChild(s);
    }
    return () => { container.innerHTML = ''; };
  }, []);

  return (
    <section className={styles.page}>

      <div ref={starsRef} className={styles.stars} />
      <div className={styles.gridOverlay} />
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.ring} ${styles.ring1}`} />
      <div className={`${styles.ring} ${styles.ring2}`} />

      <motion.div
        className={styles.astronaut}
        animate={{ y: [0, -18, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="110" height="130" viewBox="0 0 110 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="55" cy="72" rx="32" ry="36" fill="#e8eaf6" stroke="#b44aff" strokeWidth="1.5"/>
          <ellipse cx="55" cy="50" rx="22" ry="22" fill="#fff" stroke="#b44aff" strokeWidth="1.5"/>
          <ellipse cx="55" cy="50" rx="16" ry="15" fill="#0d1b3e"/>
          <ellipse cx="55" cy="50" rx="10" ry="10" fill="#00d4ff" opacity="0.15"/>
          <circle cx="49" cy="47" r="2.5" fill="#00d4ff" opacity="0.7"/>
          <ellipse cx="55" cy="50" rx="16" ry="15" fill="none" stroke="#00d4ff" strokeWidth="0.8" opacity="0.4"/>
          <rect x="23" y="63" width="10" height="22" rx="5" fill="#c5cae9" stroke="#b44aff" strokeWidth="1"/>
          <rect x="77" y="63" width="10" height="22" rx="5" fill="#c5cae9" stroke="#b44aff" strokeWidth="1"/>
          <rect x="40" y="100" width="10" height="26" rx="5" fill="#c5cae9" stroke="#b44aff" strokeWidth="1"/>
          <rect x="60" y="100" width="10" height="26" rx="5" fill="#c5cae9" stroke="#b44aff" strokeWidth="1"/>
          <rect x="38" y="60" width="34" height="18" rx="4" fill="#b44aff" opacity="0.18"/>
          <circle cx="55" cy="69" r="4" fill="#ff2d95" opacity="0.7"/>
          <path d="M30 58 Q18 44 22 32" stroke="#00d4ff" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.5"/>
          <circle cx="22" cy="30" r="4" fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0.6"/>
        </svg>
      </motion.div>

      <motion.div
        className={styles.code404}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        404
      </motion.div>

      <motion.div
        className={styles.tagline}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Lost in Space
      </motion.div>

      <div className={styles.divider} />

      <motion.p
        className={styles.message}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Houston, we have a problem —<br />
        <em>this page drifted off the grid.</em><br />
        No signal. No orbit. No trace.<br />
        But the fest? That's very much alive.
      </motion.p>

      <motion.button
        className={styles.btn}
        onClick={() => navigate('/')}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.97 }}
      >
        <span className={styles.btnShine} />
        <svg width="16" height="16" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M19 12H5M12 5l-7 7 7 7"/>
        </svg>
        Return to Base
      </motion.button>

      <div className={styles.hint}>REXIA'26 · April 2026</div>

    </section>
  );
};

export default NotFound;