import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import styles from './Offerings.module.css';

const offerings = [
  {
    no: '01',
    title: 'Hackathons',
    desc: '48-hour sprints where logic meets imagination, building the future of decentralized tech.'
  },
  {
    no: '02',
    title: 'Masterclasses',
    desc: 'Guided deep-dives into advanced architectures, led by industry architects and pioneers.'
  },
  {
    no: '03',
    title: 'Pro Shows',
    desc: 'Stellar performances that defy gravity, featuring headline artists and immersive light shows.'
  },
  {
    no: '04',
    title: 'Competitions',
    desc: 'Elite tournaments across robotics, coding, and creative arts — where only the most disciplined survive.'
  }
];

const Offerings = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const bgX = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  // Animation constants for the stack effect
  const cardVariants = (index) => {
    const isStage = index === activeIndex;
    const distance = index - activeIndex;

    // Calculate offsets based on position in stack
    // Cards after active are stacked behind with offsets
    // Cards before active are hidden/stacked further behind
    const xOffset = isStage ? 0 : distance > 0 ? distance * 30 : distance * 20;
    const yOffset = isStage ? 0 : distance > 0 ? distance * 15 : distance * -10;
    const scale = isStage ? 1 : 1 - Math.abs(distance) * 0.08;
    const opacity = isStage ? 1 : Math.max(0.3, 1 - Math.abs(distance) * 0.4);
    const zIndex = 10 - Math.abs(distance);
    const rotate = isStage ? 0 : distance * 2;

    return {
      x: xOffset,
      y: yOffset,
      scale,
      opacity,
      zIndex,
      rotate,
    };
  };

  return (
    <section ref={containerRef} className={styles.offerings}>
      <motion.div style={{ x: bgX }} className={styles.backgroundText}>
        Redefining <br /> Boun <br /> daries
      </motion.div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Multiple<br />Types Of<br />Offerings
            </motion.h2>
            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Speed up your innovation with these tools for elite generation. Click a pillar to dive deeper.
            </motion.p>
          </div>

          <div className={styles.stack}>
            {offerings.map((item, i) => (
              <motion.div
                key={item.title}
                className={`${styles.card} ${i === activeIndex ? styles.active : ''}`}
                animate={cardVariants(i)}
                whileHover={i !== activeIndex ? { y: i > activeIndex ? (i - activeIndex) * 15 - 10 : (i - activeIndex) * -10 - 10, scale: 1 - Math.abs(i - activeIndex) * 0.08 + 0.02 } : { scale: 1.02 }}
                onClick={() => setActiveIndex(i)}
                transition={{
                  layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <span className={styles.cardNumber}>/ {item.no}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
