import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Timeline.module.css';

const days = [
  {
    day: 'Day 1',
    date: 'April 10',
    title: 'Ignition',
    events: ['Opening Ceremony', 'Nebula Hack Kickoff', 'Cultural Prelims', 'Star Wars Debate Round 1'],
    color: '#00d4ff',
  },
  {
    day: 'Day 2',
    date: 'April 11',
    title: 'Orbit',
    events: ['Rocket Robotics Finals', 'Galactic Jam', 'Warp Speed Coding', 'Dark Matter Photography'],
    color: '#b44aff',
  },
  {
    day: 'Day 3',
    date: 'April 12',
    title: 'Supernova',
    events: ['Hackathon Judging', 'Cosmic Dance Finals', 'Astro Beats Pro Show', 'Closing Ceremony'],
    color: '#ff2d95',
  },
];

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const orbitY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="timeline" ref={containerRef} className={styles.timeline}>
      <div className={styles.container}>
        <motion.div
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section__title">Schedule</h2>
          <p className="section__subtitle">
            Three days charting a course through the cosmos of creativity and competition.
          </p>
        </motion.div>

        <motion.div style={{ y: orbitY }} className={styles.orbit}>
          {/* Orbit ring SVG */}
          <svg className={styles.orbitRing} viewBox="0 0 1000 200" fill="none" preserveAspectRatio="none">
            <path
              d="M 50 100 Q 250 20 500 100 Q 750 180 950 100"
              stroke="url(#orbitGradient)"
              strokeWidth="1.5"
              strokeDasharray="8 8"
              fill="none"
            />
            <defs>
              <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#b44aff" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#ff2d95" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>

          {/* Day nodes */}
          <div className={styles.nodes}>
            {days.map((day, i) => (
              <motion.div
                key={i}
                className={styles.node}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                style={{ '--node-color': day.color }}
              >
                <div className={styles.nodePoint}>
                  <div className={styles.nodeRing} />
                  <div className={styles.nodeDot} />
                </div>
                <div className={styles.nodeCard}>
                  <div className={styles.nodeHeader}>
                    <span className={styles.nodeDay}>{day.day}</span>
                    <span className={styles.nodeDate}>{day.date}</span>
                  </div>
                  <h3 className={styles.nodeTitle}>{day.title}</h3>
                  <ul className={styles.nodeEvents}>
                    {day.events.map((event, j) => (
                      <li key={j} className={styles.nodeEvent}>
                        <span className={styles.eventDot} />
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Timeline;
