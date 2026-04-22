import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import styles from './Sponsors.module.css';

const INITIAL_SPONSORS = [
  { id: 1, name: 'Red Bull', image: '/redbull.png' },
  { id: 2, name: 'CampusXL', image: '/campusxl.png' },
  { id: 3, name: 'Denver', image: '/denver.png' },
  { id: 4, name: 'DriftX', image: '/driftx.png' },
  { id: 5, name: 'Parera', image: '/Prera.png' },
];

const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  
  return newArray;
};

const SponsorLogo = ({ sponsor }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ 
      layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.4 }
    }}
    className={styles.logoWrapper}
  >
    <div className={styles.logoIcon}>
      <img src={sponsor.image} alt={sponsor.name} className={styles.sponsorImg} />
    </div>
  </motion.div>
);

const Sponsors = () => {
  const [sponsors, setSponsors] = useState(INITIAL_SPONSORS);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSponsors(prev => shuffleArray(prev));
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="sponsors" ref={containerRef} className={styles.sponsors}>
      <div className={styles.container}>
        <motion.div
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section__title">Our Sponsors</h2>
          <p className="section__subtitle">
            The power and vision behind our mission to the stars.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {sponsors.map((sponsor) => (
            <SponsorLogo key={sponsor.id} sponsor={sponsor} />
          ))}
        </div>

        {/* Become a sponsor CTA */}
        <motion.div
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a href="#contact" className={styles.cta}>
            Sponsor REXIA'26
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
