import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Offerings.module.css';

const offerings = [
  {
    no: '01',
    title: 'Hackathons',
    poweredBy: 'unstop',
    desc: '24-hour sprints where logic meets imagination, building the future of decentralized tech.',
    image: '/hackathone.png'
  },
  {
    no: '02',
    title: 'DriftX (Go-Kart)',
    desc: 'Burn rubber, chase glory. Hit the track and race for bragging rights that last a lifetime.',
    image: '/gocart.png'
  },
  {
    no: '03',
    title: 'Concert Night',
    desc: 'Lights down, volume up. One electric night with headline artists that shakes the whole campus.',
    image: '/concert.png'
  },
  {
    no: '04',
    title: 'Startup Pitch',
    desc: 'One idea. Two minutes. A room full of investors. Pitch bold, pitch sharp or go home.',
    image: '/startup3.jpg'
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

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % offerings.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + offerings.length) % offerings.length);
    startTimer();
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % offerings.length);
    startTimer();
  };

  const handleDot = (index) => {
    setActiveIndex(index);
    startTimer();
  };

  return (
    <section ref={containerRef} className={styles.offerings}>
      <motion.div style={{ y: bgY }} className={styles.backgroundText}>
        CORE OF<br />EVERYTHING
      </motion.div>

      <div className={styles.container}>
        <div className={styles.content}>

          {/* LEFT */}
          <div className={styles.left}>
            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              One Fest.<br />Endless{' '}
              <span className={styles.titleAccent}>Ways<br />To Shine</span>
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

          {/* CARD STACK */}
          <div className={styles.stackWrapper}>
            <div className={styles.stack}>
              {offerings.map((item, i) => {
                let distance = i - activeIndex;
                if (distance > offerings.length / 2) distance -= offerings.length;
                if (distance < -offerings.length / 2) distance += offerings.length;

                const isActive = i === activeIndex;
                const xOffset = isActive ? 0 : distance * 30;
                const yOffset = isActive ? 0 : Math.abs(distance) * 18;
                const scale = isActive ? 1 : 1 - Math.abs(distance) * 0.1;
                const opacity = isActive ? 1 : Math.max(0, 1 - Math.abs(distance) * 0.45);
                const zIndex = 10 - Math.abs(distance);
                const rotate = isActive ? 0 : distance * 4;

                return (
                  <motion.div
                    key={item.title}
                    className={`${styles.card} ${isActive ? styles.active : ''}`}
                    animate={{ x: xOffset, y: yOffset, scale, opacity, zIndex, rotate }}
                    onClick={() => handleDot(i)}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className={styles.cardHeader}>
                      <span className={styles.cardNumber}>/ {item.no}</span>
                    </div>
                    <div className={styles.cardInfo}>
                      <h3 className={`${styles.cardTitle} ${item.title === 'Hackathons' ? styles.hackathonTitle : ''}`}>
                        {item.title}
                      </h3>
                      {item.poweredBy && (
                        <div className={styles.cardPoweredBy}>
                          powered by <span className={styles.poweredByName}>{item.poweredBy}</span>
                        </div>
                      )}
                      <p className={styles.cardDesc}>{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}

              {/* Arrows + Dots - MOVED HERE */}
              {/* Arrows */}
              <motion.div
                className={styles.cardControls}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <button className={styles.arrowBtn} onClick={handlePrev} aria-label="Previous">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 5l-7 7 7 7" />
                  </svg>
                </button>

                <button className={styles.arrowBtn} onClick={handleNext} aria-label="Next">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Offerings;
