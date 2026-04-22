import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { eventsData } from '../eventsData/events';
import styles from './EventDetail.module.css';
import Footer from '../Footer/Footer';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const [activeIdx, setActiveIdx] = useState(null);

  const handleSegmentClick = (index) => {
    setActiveIdx(activeIdx === index ? null : index);
  };

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
                <span className={styles.prizeMedal} style={{ color: '#FFD700' }}>🏆</span>
                <span className={styles.prizeRank}>Total</span>
                <span className={styles.prizeAmt}>{event.details.prizePoll}</span>
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
      {event.judgementCriteria && event.judgementCriteria.length > 0 && (
        <>
          <div className={styles.section}>
            <div className={styles.sectionTag}>// JUDGEMENT CRITERIA</div>
            <div className={styles.criteriaLayout}>
              <div className={styles.donutContainer}>
                <svg viewBox="0 0 100 100" className={styles.donutSvg}>
                  {(() => {
                    const radius = 40;
                    const circumference = 2 * Math.PI * radius;
                    let accumulatedPercent = 0;
                    const colors = ['#b44aff', '#00d4ff', '#ff2d95', '#ffaa00', '#00ff88'];
                    
                    return event.judgementCriteria.map((item, i) => {
                      // Extract number from string like "30%" or "30"
                      const percentMatch = item.weightage.match(/\d+(\.\d+)?/);
                      const percent = percentMatch ? parseFloat(percentMatch[0]) : 0;
                      
                      const strokeDasharray = `${(percent / 100) * circumference} ${circumference}`;
                      const strokeDashoffset = -((accumulatedPercent / 100) * circumference);
                      accumulatedPercent += percent;
                      
                      const isActive = activeIdx === i;
                      const isDimmed = activeIdx !== null && !isActive;
                      
                      return (
                        <circle
                          key={i}
                          cx="50"
                          cy="50"
                          r={radius}
                          fill="transparent"
                          stroke={colors[i % colors.length]}
                          strokeWidth={isActive ? "18" : "12"}
                          strokeDasharray={strokeDasharray}
                          strokeDashoffset={strokeDashoffset}
                          transform="rotate(-90 50 50)"
                          className={`${styles.donutSegment} ${isActive ? styles.active : ''} ${isDimmed ? styles.dimmed : ''}`}
                          onClick={() => handleSegmentClick(i)}
                        />
                      );
                    });
                  })()}
                </svg>
              </div>
              <div className={styles.criteriaLegend}>
                {event.judgementCriteria.map((item, i) => {
                  const colors = ['#b44aff', '#00d4ff', '#ff2d95', '#ffaa00', '#00ff88'];
                  const isActive = activeIdx === i;
                  const isDimmed = activeIdx !== null && !isActive;
                  
                  return (
                    <div 
                      key={i} 
                      className={`${styles.legendItem} ${isActive ? styles.legendActive : ''} ${isDimmed ? styles.legendDimmed : ''}`}
                      onClick={() => handleSegmentClick(i)}
                    >
                      <span className={styles.legendColor} style={{ backgroundColor: colors[i % colors.length] }} />
                      <div className={styles.legendText}>
                        <span className={styles.legendName}>{item.criteria}</span>
                        <span className={styles.legendWeight}>{item.weightage}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.divider} />
        </>
      )}

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