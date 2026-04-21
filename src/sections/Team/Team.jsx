import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Team.module.css';

const team = [
  { name: 'Arjun Mehta', role: 'Fest Convener', emoji: '🧑‍🚀' },
  { name: 'Priya Sharma', role: 'Technical Head', emoji: '👩‍💻' },
  { name: 'Ravi Kumar', role: 'Cultural Head', emoji: '🎭' },
  { name: 'Sneha Patel', role: 'Marketing Lead', emoji: '📡' },
  { name: 'Karthik Rao', role: 'Design Head', emoji: '🎨' },
  { name: 'Ananya Singh', role: 'Operations Lead', emoji: '🛰️' },
  { name: 'Vikram Das', role: 'Sponsorship Head', emoji: '🤝' },
  { name: 'Meera Iyer', role: 'PR & Media', emoji: '📸' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const Team = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  // Double the team for a seamless infinite loop
  const duplicatedTeam = [...team, ...team];

  return (
    <section id="team" ref={containerRef} className={styles.team}>
      <div className={styles.container}>
<motion.div
  style={{ y: titleY }}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.6 }}
>
  <h2 className="section__title">The Planners</h2>
  <p className="section__subtitle">
    Great things are built by greater people. <br />
    The faces behind REXIA'26 — dropping soon. Stay locked in. 🚀
  </p>
</motion.div>
      </div>
    </section>
  );
};

export default Team;
/**
 * import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Team.module.css';

const team = [
  { name: 'Arjun Mehta', role: 'Fest Convener', emoji: '🧑‍🚀' },
  { name: 'Priya Sharma', role: 'Technical Head', emoji: '👩‍💻' },
  { name: 'Ravi Kumar', role: 'Cultural Head', emoji: '🎭' },
  { name: 'Sneha Patel', role: 'Marketing Lead', emoji: '📡' },
  { name: 'Karthik Rao', role: 'Design Head', emoji: '🎨' },
  { name: 'Ananya Singh', role: 'Operations Lead', emoji: '🛰️' },
  { name: 'Vikram Das', role: 'Sponsorship Head', emoji: '🤝' },
  { name: 'Meera Iyer', role: 'PR & Media', emoji: '📸' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const Team = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  // Double the team for a seamless infinite loop
  const duplicatedTeam = [...team, ...team];

  return (
    <section id="team" ref={containerRef} className={styles.team}>
      <div className={styles.container}>
        <motion.div
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section__title">The Crew</h2>
          <p className="section__subtitle">
            The astronauts steering REXIA's mission across the celestial frontier.
          </p>
        </motion.div>

        <div className={styles.sliderWrapper}>
          <motion.div
            className={styles.sliderTrack}
            animate={{ x: [0, '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 35,
                ease: 'linear',
              },
            }}
          >
            {duplicatedTeam.map((member, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.photoArea}>
             
                  <div className={styles.photoOverlay} />
                  <img
                    src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=600`}
                    alt={member.name}
                    className={styles.photo}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600';
                    }}
                  />
                </div>
                <div className={styles.cardFooter}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.role}>{member.role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;

 */