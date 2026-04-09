import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../Logo/Logo';
import styles from './Loader.module.css';

const Loader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const startTime = Date.now();
    const duration = 2200;
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const p = Math.min(elapsed / duration, 1);
      // Ease out
      setProgress(1 - Math.pow(1 - p, 3));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onComplete?.(), 700);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.loader}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Warp speed lines */}
          <div className={styles.warp}>
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className={styles.line}
                style={{
                  '--i': i,
                  '--delay': `${i * 0.06}s`,
                  '--angle': `${(i / 30) * 360}deg`,
                  '--color': i % 3 === 0 ? 'var(--color-neon-blue)' : i % 3 === 1 ? 'var(--color-neon-purple)' : 'var(--color-neon-pink)',
                }}
              />
            ))}
          </div>

          {/* Logo in center */}
          <motion.div
            className={styles.logoContainer}
            initial={{ opacity: 0, scale: 0.3, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Logo size="lg" animate />
          </motion.div>

          {/* Tagline */}
          <motion.div
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <span className={styles.tagline}>Initializing warp drive...</span>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className={styles.progressWrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className={styles.progressTrack}>
              <div
                className={styles.progressFill}
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <span className={styles.progressText}>{Math.round(progress * 100)}%</span>
          </motion.div>

          {/* Expanding rings */}
          <div className={styles.rings}>
            <div className={styles.ring} style={{ '--ring-delay': '0s' }} />
            <div className={styles.ring} style={{ '--ring-delay': '0.8s' }} />
            <div className={styles.ring} style={{ '--ring-delay': '1.6s' }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
