import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Contact.module.css';

const Contact = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', college: '', message: '' });
  };

  return (
    <section id="contact" ref={containerRef} className={styles.contact}>
      {/* Ambient background particles */}
      <div className={styles.ambientBg}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={styles.ambientParticle}
            style={{
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
              '--duration': `${Math.random() * 15 + 10}s`,
              '--delay': `${Math.random() * 5}s`,
              '--size': `${Math.random() * 200 + 100}px`,
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        <motion.div
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section__title">Join REXIA'26</h2>
          <p className="section__subtitle">
            Ready to launch? Register now and be part of the most electrifying fest in the galaxy.
          </p>
        </motion.div>

        <motion.div style={{ y: contentY }} className={styles.grid}>
          {/* Info column */}
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Get in Touch</h3>
              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📧</span>
                  <div>
                    <span className={styles.infoLabel}>Email</span>
                    <span className={styles.infoValue}>hello@rexia26.com</span>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📍</span>
                  <div>
                    <span className={styles.infoLabel}>Location</span>
                    <span className={styles.infoValue}>Main Campus Grounds</span>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📅</span>
                  <div>
                    <span className={styles.infoLabel}>Dates</span>
                    <span className={styles.infoValue}>April 10–12, 2026</span>
                  </div>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink} aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M13.232 10.768L20 4" />
                  </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>


          {/* Form column */}
          <motion.div
            className={styles.formWrapper}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>College</label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Your college name"
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${styles.input} ${styles.textarea}`}
                  placeholder="Tell us something..."
                  rows="4"
                />
              </div>
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={submitted}
              >
                {submitted ? (
                  <>
                    <span className={styles.checkmark}>✓</span>
                    Transmission Sent!
                  </>
                ) : (
                  <>
                    Register Now
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
