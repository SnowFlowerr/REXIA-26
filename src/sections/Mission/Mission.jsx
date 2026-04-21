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
  Where Minds<br />
  <span className={styles.accent}>Meet Magic</span><br />
  And Build
</motion.h2>

        <div className={styles.content}>
          <motion.p
            className={styles.mainText}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
              REXIA'26, where sparks fly and legends rise. 
  We don't just push limits, we erase them.
          </motion.p>

       <motion.div
  className={styles.sideText}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.4, duration: 0.8 }}
>
Sweat it. Stage it. Slay it.
<br />
From mosh pits to mic drops,
we turn one weekend into a lifetime memory.
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
