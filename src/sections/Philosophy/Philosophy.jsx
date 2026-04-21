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
      Where Stages
    </motion.span>
    <motion.span
      style={{ y: y2 }}
      className={`${styles.line} ${styles.white}`}
    >
      Become
    </motion.span>
    <motion.span
      style={{ y: y3 }}
      className={`${styles.line} ${styles.gray}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 0.7, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      Stories
    </motion.span>
  </div>

  <motion.p
    className={styles.description}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3, duration: 0.8 }}
  >
    Dance hard. Compete harder. Live loudest. REXIA'26 is where every
    performance, every cheer, and every unforgettable moment becomes
    the story you tell for years.
  </motion.p>
</div>
    </section>
  );
};

export default Philosophy;
