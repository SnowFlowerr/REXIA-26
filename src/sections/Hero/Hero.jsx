import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Logo from '../../components/Logo/Logo';
import { useMagnetic } from '../../hooks/useMotion';
import styles from './Hero.module.css';

const letterVariants = {
  hidden: { opacity: 0, y: 80, rotateX: 90 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.4 + i * 0.04,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const Hero = () => {
  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const magneticRef = useMagnetic(0.2);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const ySubtitle = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yBadge = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.85]);
  const blur = useTransform(scrollYProgress, [0, 0.4], [0, 10]);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [mouseX, mouseY]);

  const title = "REXIA'26";

  return (
    <section id="home" ref={sectionRef} className={styles.hero}>
      {/* NEW: Immersive Astronaut Wallpaper with scroll-based parallax and zoom */}
      <motion.div
        className={styles.wallpaperContainer}
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 200]),
          scale: useTransform(scrollYProgress, [0, 0.5], [1, 1.1]),
          opacity
        }}
      >
        <img src="/hero-bg.jpg" alt="Space Astronaut" className={styles.wallpaper} />
        {/* Gradient overlay to blend with the next section */}
        <div className={styles.wallpaperOverlay} />
      </motion.div>

      {/* Grid overlay */}
      <div className={styles.gridOverlay} />

      {/* Floating particles — more of them */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
              '--size': `${Math.random() * 4 + 1}px`,
              '--duration': `${Math.random() * 12 + 6}s`,
              '--delay': `${Math.random() * 5}s`,
              '--color': i % 3 === 0 ? 'rgba(0,212,255,0.6)' : i % 3 === 1 ? 'rgba(180,74,255,0.6)' : 'rgba(255,45,149,0.4)',
            }}
          />
        ))}
      </div>

      {/* Orbit rings */}
      <div className={styles.orbitRings}>
        <div className={styles.ring1} />
        <div className={styles.ring2} />
        <div className={styles.ring3} />
      </div>

      <motion.div
        className={styles.content}
        style={{ opacity, scale, filter: `blur(${blur}px)` }}
      >
        {/* Animated logo starburst */}
        <motion.div
          className={styles.logoBurst}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* <Logo size="lg" animate /> */}
        </motion.div>

        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ y: yBadge }}
        >
          <span className={styles.badgeDot} />
          <span>April 2026</span>
          <span className={styles.badgeSep}>•</span>
          <span>The Future Awaits</span>
        </motion.div>

        {/* Letter-by-letter title reveal */}
        <motion.h1 className={styles.title} style={{ y: yTitle }}>
          <span className={styles.titleInner}>
            {title.split('').map((char, i) => (
              <motion.span
                key={i}
                className={`${styles.titleLetter} ${char === "'" ? styles.accent : ''}`}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                style={{ display: 'inline-block' }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          <motion.div
            className={styles.titleUnderline}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          style={{ y: ySubtitle }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Beyond Gravity. Beyond Limits.
        </motion.p>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          Experience the most electrifying college fest in the cosmos.
          <br />
          Three days of innovation, art, and interstellar energy.
        </motion.p>

        <motion.div
          className={styles.ctaGroup}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <motion.a
            ref={magneticRef}
            href="#about"
            className={styles.ctaPrimary}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.ctaContent}>
              <span>Explore Fest</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </span>
            <span className={styles.ctaGlow} />
            <span className={styles.ctaShine} />
          </motion.a>
          <motion.a
            href="#events"
            className={styles.ctaSecondary}
            whileHover={{ scale: 1.05, borderColor: 'rgba(180,74,255,0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            View Events
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator with bouncing animation */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <motion.div
          className={styles.scrollMouse}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className={styles.scrollDot} />
        </motion.div>
        <span>Scroll to explore</span>
      </motion.div>

      {/* Glow orbs - enhanced with more */}
      <div className={styles.orbContainer}>
        <motion.div className={styles.orb1} style={{ x: springX, y: springY }} />
        <motion.div
          className={styles.orb2}
          style={{
            x: useTransform(springX, v => v * -0.5),
            y: useTransform(springY, v => v * -0.5),
          }}
        />
        <motion.div
          className={styles.orb3}
          style={{
            x: useTransform(springX, v => v * 0.3),
            y: useTransform(springY, v => v * 0.3),
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
