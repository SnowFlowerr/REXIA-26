import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  const timerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  // Auto-play logic
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % offerings.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
    startTimer(); // Reset timer on manual click
  };

  // Enhanced stack motion variants
  const getCardVariants = (index) => {
    const isStage = index === activeIndex;
    let distance = index - activeIndex;
    
    // Looping distance logic for a smoother stack
    if (distance > offerings.length / 2) distance -= offerings.length;
    if (distance < -offerings.length / 2) distance += offerings.length;

    const xOffset = isStage ? 0 : distance * 40;
    const yOffset = isStage ? 0 : Math.abs(distance) * 20;
    const scale = isStage ? 1 : 1 - Math.abs(distance) * 0.1;
    const opacity = isStage ? 1 : Math.max(0, 1 - Math.abs(distance) * 0.4);
    const zIndex = 10 - Math.abs(distance);
    const rotate = isStage ? 0 : distance * 5;

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
      <motion.div style={{ y: bgY }} className={styles.backgroundText}>
        CORE OF<br />EVERYTHING
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
    One Fest.<br />Endless <span className={styles.titleAccent}>Ways<br />To Shine</span>
  </motion.h2>
  <motion.p
    className={styles.subtitle}
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2, duration: 0.8 }}
  >
    Compete. Create. Celebrate. Every event is a stage — find yours.
  </motion.p>
</div>

          <div className={styles.stack}>
            {offerings.map((item, i) => (
              <motion.div
                key={item.title}
                className={`${styles.card} ${i === activeIndex ? styles.active : ''}`}
                animate={getCardVariants(i)}
                onClick={() => handleCardClick(i)}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.cardNumber}>/ {item.no}</span>
                </div>
                <div className={styles.cardInfo}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
