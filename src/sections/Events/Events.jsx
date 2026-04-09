import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Events.module.css';

const events = [
  { title: 'Nebula Hack', category: 'Technical', description: '48-hour hackathon to build solutions for interplanetary challenges. Cash prizes worth ₹2L.', color: '#00d4ff' },
  { title: 'Cosmic Dance', category: 'Cultural', description: 'Solo and group dance competition with zero-gravity themed choreography rounds.', color: '#b44aff' },
  { title: 'Star Wars Debate', category: 'Literary', description: 'Parliamentary debate on futuristic ethics, AI governance, and space colonization.', color: '#ff2d95' },
  { title: 'Rocket Robotics', category: 'Technical', description: 'Design and race autonomous robots through an obstacle-laden lunar terrain.', color: '#00d4ff' },
  { title: 'Astro Beats', category: 'Pro Show', description: 'Live DJ night under the stars featuring India\'s top electronic artists.', color: '#b44aff' },
  { title: 'Orbit Quiz', category: 'Technical', description: 'Multi-round quiz spanning science, tech, pop culture, and space trivia.', color: '#00d4ff' },
  { title: 'Galactic Jam', category: 'Cultural', description: 'Battle of the bands — bring your instruments and rock the cosmos.', color: '#ff2d95' },
  { title: 'Dark Matter Photography', category: 'Creative', description: 'Night photography contest capturing the beauty of the campus under cosmic lighting.', color: '#b44aff' },
  { title: 'Warp Speed Coding', category: 'Technical', description: 'Competitive programming sprint — solve 10 problems in 3 hours.', color: '#00d4ff' },
];

const categories = ['All', ...new Set(events.map(e => e.category))];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const Events = () => {
  const [filter, setFilter] = useState('All');
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const filtersY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const filtered = filter === 'All' ? events : events.filter(e => e.category === filter);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    card.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${y}deg) scale(1.03)`;
    // Update shine position
    const shine = card.querySelector('[data-shine]');
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${e.clientX - rect.left}px ${e.clientY - rect.top}px, rgba(255,255,255,0.08) 0%, transparent 60%)`;
    }
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)';
    const shine = e.currentTarget.querySelector('[data-shine]');
    if (shine) shine.style.background = 'none';
  };

  return (
    <section id="events" ref={containerRef} className={styles.events}>
      <div className={styles.container}>
        <motion.div
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section__title">Events</h2>
          <p className="section__subtitle">
            From hackathons to headliners — discover events that defy gravity.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          style={{ y: filtersY }}
          className={styles.filters}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          style={{ y: gridY }}
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          key={filter}
        >
          {filtered.map((event, i) => (
            <motion.div
              key={event.title}
              className={styles.card}
              variants={cardVariants}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ '--card-color': event.color }}
            >
              <div data-shine className={styles.shine} />
              <div className={styles.cardTop}>
                <span className={styles.category}>{event.category}</span>
                <div className={styles.cardDot} />
              </div>
              <h3 className={styles.cardTitle}>{event.title}</h3>
              <p className={styles.cardDesc}>{event.description}</p>
              <div className={styles.cardFooter}>
                <span className={styles.learnMore}>
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
              <div className={styles.cardBorderGlow} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
