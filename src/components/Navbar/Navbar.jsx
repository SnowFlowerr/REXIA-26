import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../Logo/Logo';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
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

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.inner}>
          <motion.a
            href="#home"
            className={styles.logoLink}
            onClick={(e) => handleNavClick(e, '#home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Logo size="sm" />
          </motion.a>

          <div className={styles.links}>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`${styles.link} ${activeSection === link.href.slice(1) ? styles.activeLink : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -2 }}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    className={styles.activeIndicator}
                    layoutId="activeNav"
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  />
                )}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className={styles.cta}
              onClick={(e) => handleNavClick(e, '#contact')}
              custom={navLinks.length}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,212,255,0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={styles.ctaText}>Register Now</span>
              <span className={styles.ctaShine} />
            </motion.a>
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
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className={styles.mobileLink}
                    onClick={(e) => handleNavClick(e, link.href)}
                    custom={i}
                    variants={mobileLinkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <span className={styles.mobileLinkNumber}>0{i + 1}</span>
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  className={styles.mobileCta}
                  onClick={(e) => handleNavClick(e, '#contact')}
                  custom={navLinks.length}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Register Now →
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
