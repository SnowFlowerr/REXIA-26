import { motion } from 'framer-motion';
import Logo from '../../components/Logo/Logo';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: 'Instagram',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      label: 'Twitter',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M13.232 10.768L20 4" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: 'YouTube',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      ),
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Logo size="md" />
            </motion.div>
            <p className={styles.tagline}>Beyond Gravity. Beyond Limits.</p>
            <div className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href="#"
                  className={styles.socialLink}
                  aria-label={link.label}
                  whileHover={{
                    y: -3,
                    scale: 1.1,
                    boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)',
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Navigate</h4>
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Events', href: '#events' },
                { label: 'Schedule', href: '#timeline' },
              ].map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  className={styles.link}
                  whileHover={{ x: 4, color: '#eef0f6' }}
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Explore</h4>
              {[
                { label: 'Team', href: '#team' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Sponsors', href: '#sponsors' },
                { label: 'Contact', href: '#contact' },
              ].map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  className={styles.link}
                  whileHover={{ x: 4, color: '#eef0f6' }}
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Connect</h4>
              {['Instagram', 'Twitter / X', 'LinkedIn', 'YouTube'].map((label) => (
                <motion.a
                  key={label}
                  href="#"
                  className={styles.link}
                  whileHover={{ x: 4, color: '#eef0f6' }}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.divider}>
          <div className={styles.dividerLine} />
          <div className={styles.dividerGlow} />
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} REXIA'26. Made for the future 🚀
          </p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>Privacy Policy</a>
            <a href="#" className={styles.bottomLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
