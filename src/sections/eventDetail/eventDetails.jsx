import { useParams, useNavigate } from 'react-router-dom';
import { eventsData } from '../eventsData/events';
import styles from './EventDetail.module.css';
import Footer from '../Footer/Footer';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const allEvents = eventsData.flatMap(cat =>
    cat.events.map(e => ({ ...e, category: cat.category, color: cat.color }))
  );
  const event = allEvents.find(e => e.id === id);

  if (!event) {
    navigate('/event');
    return null;
  }

  const categoryLabels = { technical: 'Technical', cultural: 'Cultural', sports: 'Sports' };

  return (
    <div className={styles.page}>

      {/* ── BACK ── */}
      <button className={styles.backBtn} onClick={() => navigate('/event')}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        BACK TO EVENTS
      </button>

      {/* ── HERO ── */}
      <div className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.categoryTag}>
            // {categoryLabels[event.category].toUpperCase()}
          </div>
          <h1 className={styles.eventName}>{event.name}</h1>
          <p className={styles.tagline}>{event.tagline}</p>
          <div className={styles.heroMeta}>
            <div className={styles.metaItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {event.location}
            </div>

          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.prizeCard}>
            <div className={styles.prizeLabel}>PRIZE POOL</div>
            <div className={styles.prizes}>
              <div className={styles.prizeItem}>
                <span className={styles.prizeMedal} style={{ color: '#FFD700' }}>🥇</span>
                <span className={styles.prizeRank}>1st</span>
                <span className={styles.prizeAmt}>{event.details.prizePoll['1st']}</span>
              </div>
              <div className={styles.prizeItem}>
                <span className={styles.prizeMedal} style={{ color: '#C0C0C0' }}>🥈</span>
                <span className={styles.prizeRank}>2nd</span>
                <span className={styles.prizeAmt}>{event.details.prizePoll['2nd']}</span>
              </div>
              <div className={styles.prizeItem}>
                <span className={styles.prizeMedal} style={{ color: '#CD7F32' }}>🥉</span>
                <span className={styles.prizeRank}>3rd</span>
                <span className={styles.prizeAmt}>{event.details.prizePoll['3rd']}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      {/* ── OVERVIEW ── */}
      <div className={styles.section}>
        <div className={styles.sectionTag}>// OVERVIEW</div>
        <p className={styles.overviewText}>{event.overview}</p>
      </div>

      <div className={styles.divider} />

      {/* ── DETAILS GRID ── */}
      <div className={styles.section}>
        <div className={styles.sectionTag}>// EVENT DETAILS</div>
        <div className={styles.detailsGrid}>
          {[
            { label: 'DATE', value: event.details.date },
            { label: 'TIME', value: event.details.time },
            { label: 'VENUE', value: event.details.venue },
            { label: 'CLUB', value: event.details.club },
            { label: 'FACULTY ADVISOR', value: event.details.facultyAdvisor },
            { label: 'TEAM SIZE', value: event.details.teamSize },
            { label: 'REGISTRATION FEE', value: event.details.registrationFee },
          ].map((item, i) => (
            <div key={i} className={styles.detailCard}>
              <span className={styles.detailLabel}>{item.label}</span>
              <span className={styles.detailValue}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      {/* ── SNAPSHOTS TABLE ── */}
      <div className={styles.section}>
        <div className={styles.sectionTag}>// SNAPSHOTS</div>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ROUND</th>
                <th>FORMAT</th>
                <th>DURATION</th>
                <th>ELIMINATES</th>
              </tr>
            </thead>
            <tbody>
              {event.snapshots.map((snap, i) => (
                <tr key={i}>
                  <td className={styles.roundCell}>{snap.round}</td>
                  <td>{snap.format}</td>
                  <td>{snap.duration}</td>
                  <td className={styles.eliminatesCell}>{snap.eliminates}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.divider} />

      {/* ── RULES ── */}
      <div className={styles.section}>
        <div className={styles.sectionTag}>// RULES & REGULATIONS</div>
        <div className={styles.rulesList}>
          {event.rules.map((rule, i) => (
            <div key={i} className={styles.ruleItem}>
              <span className={styles.ruleNumber}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className={styles.ruleText}>{rule}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      {/* ── JUDGEMENT CRITERIA ── */}
      <div className={styles.section}>
        <div className={styles.sectionTag}>// JUDGEMENT CRITERIA</div>
        <div className={styles.criteriaList}>
          {event.judgementCriteria.map((item, i) => (
            <div key={i} className={styles.criteriaItem}>
              <div className={styles.criteriaTop}>
                <span className={styles.criteriaName}>{item.criteria}</span>
                <span className={styles.criteriaWeight}>{item.weightage}</span>
              </div>
              <div className={styles.criteriaBar}>
                <div
                  className={styles.criteriaFill}
                  style={{ width: item.weightage }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      {/* ── RANKING ── */}
      <div className={styles.section}>
        <div className={styles.sectionTag}>// RANKING</div>
        <div className={styles.rankingBox}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="#b44aff" strokeWidth="2">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
            <polyline points="17 6 23 6 23 12"/>
          </svg>
          <p className={styles.rankingText}>{event.ranking}</p>
        </div>
      </div>

      <div className={styles.divider} />

      {/* ── CONTACT ── */}
      <div className={styles.section}>
        <div className={styles.sectionTag}>// CONTACT</div>
        <div className={styles.contactGrid}>
          {event.contact.map((person, i) => (
            <div key={i} className={styles.contactCard}>
              <div className={styles.contactAvatar}>
                {person.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div className={styles.contactInfo}>
                <div className={styles.contactName}>{person.name}</div>
                <div className={styles.contactRole}>{person.role}</div>
                <a href={`tel:${person.phone}`} className={styles.contactLink}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  {person.phone}
                </a>
                <a href={`mailto:${person.email}`} className={styles.contactLink}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  {person.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottomPad} />
    <Footer/>
    </div>
  );
};

export default EventDetail;