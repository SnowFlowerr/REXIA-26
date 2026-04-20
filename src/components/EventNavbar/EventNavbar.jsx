import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import styles from '../Navbar/Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Event', href: '/event' },
];

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.04,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    },
  }),
};

const mobileMenuVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'spring', damping: 25, stiffness: 200 },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.3 },
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.06, duration: 0.3 },
  }),
};

const EventNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const activePath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.inner}>
          <Link to="/" className={styles.logoLink} onClick={() => setMobileOpen(false)}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Logo size="sm" />
            </motion.div>
          </Link>

          <div className={styles.links}>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -2 }}
              >
                <Link
                  to={link.href}
                  className={`${styles.link} ${activePath === link.href || (activePath.startsWith('/event') && link.href === '/event') ? styles.activeLink : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                  {(activePath === link.href || (activePath.startsWith('/event') && link.href === '/event')) && (
                    <motion.div
                      className={styles.activeIndicator}
                      layoutId="activeNavEvent"
                      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.div
              custom={navLinks.length}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,212,255,0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/#contact" className={styles.cta} onClick={() => setMobileOpen(false)}>
                <span className={styles.ctaText}>Register</span>
                <span className={styles.ctaShine} />
              </Link>
            </motion.div>
          </div>

          <motion.button
            className={`${styles.hamburger} ${mobileOpen ? styles.active : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <span />
            <span />
            <span />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className={styles.mobileMenu}
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className={styles.mobileMenuInner}>
                <Logo size="md" animate className={styles.mobileLogo} />
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    custom={i}
                    variants={mobileLinkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      to={link.href}
                      className={styles.mobileLink}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className={styles.mobileLinkNumber}>0{i + 1}</span>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  custom={navLinks.length}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    to="/#contact"
                    className={styles.mobileCta}
                    onClick={() => setMobileOpen(false)}
                  >
                    Register →
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default EventNavbar;
