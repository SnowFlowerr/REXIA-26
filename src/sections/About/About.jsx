import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useCounter } from '../../hooks/useMotion';
import styles from './About.module.css';

const cards = [
  {
    no: '01',
    icon: '📈',
    title: 'Efficient',
    description: 'Optimized performance through advanced architectural patterns and streamlined workflows.',
  },
  {
    no: '02',
    icon: '🔍',
    title: 'Transparent',
    description: 'Complete visibility into every phase of development with decentralized auditing systems.',
  },
  {
    no: '03',
    icon: '🛡️',
    title: 'Reliable',
    description: 'Resilient infrastructure designed to handle galactic-scale traffic without compromise.',
  },
];

const StatCounter = ({ value, label }) => {
  const numericValue = parseInt(value);
  const suffix = value.replace(/[0-9]/g, '');
  const { count, ref } = useCounter(numericValue, 2000);

  return (
    <div ref={ref} className={styles.stat}>
      <motion.span
        className={styles.statValue}
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        {count}{suffix}
      </motion.span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
};

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="about" ref={containerRef} className={styles.about}>
      <div className={styles.container}>
        <motion.div
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="section__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Fest That Hits Different
          </motion.h2>
          <p className="section__subtitle">
            Two days. Zero limits. Infinite vibes — where your wildest ideas
            get a stage and every moment hits harder than the last.
          </p>
        </motion.div>


        <div
          className={styles.accordion}
          onMouseLeave={() => setActiveIndex(null)}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${styles.card} ${index === activeIndex ? styles.cardActive : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
            >
              <div className={styles.cardBgNumber}>{card.no}</div>
              <div className={styles.cardContent}>
                <div className={styles.topContent}>
                  <span className={styles.cardIcon}>{card.icon}</span>
                  <p className={styles.cardDesc}>{card.description}</p>
                </div>
                <h3 className={styles.cardTitle}>{card.title.split(' ')[0]}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
