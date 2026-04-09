import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Mission.module.css';

const Mission = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const bgX = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const headingY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={containerRef} className={styles.mission}>
      <motion.div style={{ x: bgX }} className={styles.backgroundText}>
        Redefining <br /> Boun <br /> daries
      </motion.div>

      <div className={styles.container}>
        <motion.div
          className={styles.missionTag}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.line} />
          <span>Our Mission</span>
        </motion.div>

        <motion.h2
          style={{ y: headingY }}
          className={styles.heading}
        >
          Architecting<br />
          <span className={styles.accent}>The Future</span><br />
          Of Technology
        </motion.h2>

        <div className={styles.content}>
          <motion.p
            className={styles.mainText}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            REXIA'26 is a catalyst. We bridge the gap between academic theory and industrial impact through intense engineering and creative exploration.
          </motion.p>

          <motion.div
            className={styles.sideText}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We foster an environment where elite developers and technical architects converge to deconstruct and rebuild the global digital infrastructure for a better cosmos.
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
