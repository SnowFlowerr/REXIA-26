import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useCounter } from '../../hooks/useMotion';
import styles from './About.module.css';

const cards = [
  {
    icon: '🎭',
    title: 'Cultural Events',
    description: 'Dance battles, music showcases, open mics, and theatrical performances that light up the cosmic stage.',
    count: '20+',
  },
  {
    icon: '💻',
    title: 'Technical Events',
    description: 'Hackathons, coding sprints, robotics challenges, and engineering competitions push the boundaries of innovation.',
    count: '25+',
  },
  {
    icon: '🎤',
    title: 'Pro Shows',
    description: 'Headliner concerts, celebrity performances, and immersive art installations that transcend gravity itself.',
    count: '5+',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80, rotateX: 15, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -100]);

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
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About The Fest
          </motion.h2>
          <p className="section__subtitle">
            Where the cosmos meets creativity — three days of limitless possibility, innovation, and celestial energy.
          </p>
        </motion.div>

        <motion.div
          style={{ y: gridY }}
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={cardVariants}
              whileHover={{
                y: -16,
                scale: 1.04,
                rotateY: 5,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
            >
              <div className={styles.cardGlow} />
              <div className={styles.cardBorder} />
              <div className={styles.cardContent}>
                <span className={styles.cardIcon}>{card.icon}</span>
                <span className={styles.cardCount}>{card.count}</span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.description}</p>
              </div>
              <div className={styles.cardShine} />
              <div className={styles.cardCorner} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
