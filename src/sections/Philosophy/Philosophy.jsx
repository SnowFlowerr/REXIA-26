import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Philosophy.module.css';

const Philosophy = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <section ref={containerRef} className={styles.philosophy}>
      <div className={styles.glow} />
      
      <div className={styles.container}>
        <div className={styles.heading}>
          <motion.span 
            style={{ y: y1 }}
            className={`${styles.line} ${styles.white}`}
          >
            Where Logic
          </motion.span>
          <motion.span 
            style={{ y: y2 }}
            className={`${styles.line} ${styles.white}`}
          >
            Meets
          </motion.span>
          <motion.span 
            style={{ y: y3 }}
            className={`${styles.line} ${styles.gray}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Human Intuition
          </motion.span>
        </div>

        <motion.p 
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Empowering the next generation to architect the global technology landscape through discipline and disruption. REXIA'26 is the bridge between raw data and creative instinct.
        </motion.p>
      </div>
    </section>
  );
};

export default Philosophy;
