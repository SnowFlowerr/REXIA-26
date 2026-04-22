import { motion, AnimatePresence } from 'framer-motion';
import styles from './RegisterModal.module.css';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: 'spring', damping: 25, stiffness: 300 }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    y: 20,
    transition: { duration: 0.2 }
  },
};

const RegisterModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.overlay}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div 
            className={styles.modal}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className={styles.title}>Choose Your Path</h2>
            <p className={styles.subtitle}>Select the experience you wish to register for.</p>
            
            <div className={styles.optionsGrid}>
              <a href="https://unstop.com/" target="_blank" rel="noreferrer" className={styles.optionCard}>
                <div className={styles.iconWrapper} style={{ color: '#b44aff', borderColor: 'rgba(180, 74, 255, 0.3)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <h3 className={styles.optionTitle}>starHack 1.0</h3>
                <p className={styles.optionDesc}>24-hour intense hackathon.</p>
              </a>

              <a href="https://forms.gle/6e9tq9MnMduuJy3N6" target="_blank" rel="noreferrer" className={styles.optionCard}>
                <div className={styles.iconWrapper} style={{ color: '#00d4ff', borderColor: 'rgba(0, 212, 255, 0.3)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className={styles.optionTitle}>Other Events</h3>
                <p className={styles.optionDesc}>Cultural, technical & sports events.</p>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegisterModal;
