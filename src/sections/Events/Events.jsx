import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { eventsData } from '../eventsData/events';
import styles from './EventsHero.module.css';
import Footer from '../Footer/Footer';

const categoryLabels = {
  technical: 'Technical',
  cultural: 'Cultural',
  sports: 'Sports',
};

const EventsHero = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  const allEvents = eventsData.flatMap(cat =>
    cat.events.map(e => ({ ...e, category: cat.category, color: cat.color }))
  );

  const filtered = activeFilter === 'all'
    ? allEvents
    : allEvents.filter(e => e.category === activeFilter);

  return (
    <div className={styles.page}>

      {/* ── HERO BANNER ── */}
      <div className={styles.banner}>
        <div className={styles.leftBar} />
        <div className={styles.ghostText}>REXIA</div>
        <div className={styles.dotGrid}>
          {[...Array(48)].map((_, i) => <span key={i} className={styles.dot} />)}
        </div>

        <div className={styles.content}>
          <div className={styles.titleBlock}>
            <span className={styles.the}>THE</span>
            <span className={styles.events}>EVENTS.</span>
          </div>
          <div className={styles.subBlock}>
            <div className={styles.subBar} />
            <div className={styles.subText}>
              REXIA'26 — Arena of Code, Chaos<br />& Cosmic Glory.
            </div>
          </div>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.dividerLine} />
          <div className={styles.verticalLabel}>REXIA MMXXVI</div>
        </div>
      </div>

      {/* ── EVENTS SECTION ── */}
      <div className={styles.eventsSection}>

        {/* Filter Bar */}
        <div className={styles.filterBar}>
          <span className={styles.filterLabel}>FILTER:</span>
          {['all', 'technical', 'cultural', 'sports'].map(f => (
            <button
              key={f}
              className={`${styles.filterBtn} ${activeFilter === f ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f === 'all' ? 'ALL EVENTS' : f.toUpperCase()}
            </button>
          ))}
        </div>

        <div className={styles.filterDivider} />

        {/* Cards Grid */}
        <div className={styles.grid}>
          {filtered.map(event => (
            <div
              key={event.id}
              className={styles.card}
              onClick={() => navigate(`/event/${event.id}`)}
            >
              <div className={styles.hoverFill} />
              <div className={styles.sideLabel}>VIP PASS ACCESS 2026</div>

              {/* Top */}
              <div className={styles.cardTop}>
                <span className={styles.categoryTag}>
                  // {categoryLabels[event.category].toUpperCase()}
                </span>
                <div className={styles.arrowBtn}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>

              {/* Body */}
              <div className={styles.cardBody}>
                <h3 className={styles.eventName}>{event.name.toUpperCase()}</h3>
                <div className={styles.descBlock}>
                  <div className={styles.descBar} />
                  <p className={styles.eventDesc}>{event.tagline.toUpperCase()}</p>
                </div>
              </div>

              {/* Footer */}
              <div className={styles.cardFooter}>

                <div className={styles.footerItem}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>{event.location.toUpperCase()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default EventsHero;