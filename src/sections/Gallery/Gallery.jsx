import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import styles from './Gallery.module.css';

// Using gradient placeholders for gallery images
const galleryItems = [
  { id: 1, title: 'Opening Ceremony', gradient: 'linear-gradient(135deg, #2e1155, #4a1a8a)', aspect: 'tall' },
  { id: 2, title: 'Hackathon Floor', gradient: 'linear-gradient(135deg, #1e3a8a, #00d4ff)', aspect: 'wide' },
  { id: 3, title: 'Dance Battle', gradient: 'linear-gradient(135deg, #ff2d95, #b44aff)', aspect: 'normal' },
  { id: 4, title: 'Sports', gradient: 'linear-gradient(135deg, #00d4ff, #2e1155)', aspect: 'normal' },
  { id: 5, title: 'Pro Show Night', gradient: 'linear-gradient(135deg, #b44aff, #ff2d95)', aspect: 'tall' },
  { id: 6, title: 'Coding Sprint', gradient: 'linear-gradient(135deg, #1e3a8a, #b44aff)', aspect: 'wide' },
  { id: 7, title: 'Art Installation', gradient: 'linear-gradient(135deg, #4a1a8a, #00d4ff)', aspect: 'normal' },
  { id: 8, title: 'Closing Fireworks', gradient: 'linear-gradient(135deg, #ff2d95, #00d4ff)', aspect: 'normal' },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [-70, 70]);
  const masonryY = useTransform(scrollYProgress, [0, 1], [0, -140]);

  return (
    <section id="gallery" ref={containerRef} className={styles.gallery}>
      <div className={styles.container}>
        <motion.div
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section__title">Highlights</h2>
          <p className="section__subtitle">
            Relive the moments that made waves across the universe.
          </p>
        </motion.div>

        <motion.div
          style={{ y: masonryY }}
          className={styles.masonry}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className={`${styles.item} ${styles[item.aspect]}`}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
              }}
              whileHover={{ scale: 1.04, zIndex: 5 }}
              onClick={() => setSelected(item)}
            >
              <div
                className={styles.image}
                style={{ background: item.gradient }}
              >
                <div className={styles.imageOverlay}>
                  <span className={styles.imageTitle}>{item.title}</span>
                  <span className={styles.imageIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                      <path d="M11 8v6M8 11h6" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={styles.lightboxImage}
                style={{ background: selected.gradient }}
              >
                <div className={styles.lightboxLabel}>{selected.title}</div>
              </div>
              <button
                className={styles.lightboxClose}
                onClick={() => setSelected(null)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
