import { motion } from 'framer-motion';
import styles from './drift.module.css';

const Drift = ({ onRegisterClick }) => {
  return (
    <section className={styles.driftSection} id="driftx">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <motion.div 
              className={styles.textTop}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.label}>FIRST TIME IN DELHI NCR</div>
              <h2 className={styles.title}>
                DRIFT<span className={styles.accent}>X</span>
              </h2>
              <div className={styles.prizeBadge}>
                <span className={styles.prizeIcon}>🏆</span>
                <span>WIN ₹10,000</span>
              </div>
            </motion.div>

            <motion.div 
              className={styles.textBottom}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className={styles.desc}>
                Experience the ultimate adrenaline rush as high-speed precision meets raw power.
                Join us for the most electrifying drifting competition, showcasing
                insane turns, burnt rubber, and unmatched skill.
              </p>
              <motion.button 
                className={styles.ctaBtn}
                onClick={(e) => { e.preventDefault(); if (onRegisterClick) onRegisterClick(); }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(180, 74, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                BUY TICKETS / REGISTER
              </motion.button>
            </motion.div>
          </div>

          <motion.div 
            className={styles.imageContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.glow} />
              <img src="/driftx_demo.png" alt="DriftX Cyberpunk Car" className={styles.image} />
              <div className={styles.overlayText}>VIP ACCESS</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Drift;