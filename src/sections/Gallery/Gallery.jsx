import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import styles from './Gallery.module.css';

// Using gradient placeholders for gallery images
const galleryItems = [
  { id: 1, title: 'Opening Ceremony', image: '/pic1.jpg', aspect: 'tall' },
  { id: 2, title: 'Hackathon Floor', image: '/pic2.jpg', aspect: 'wide' },
  { id: 3, title: 'Dance Battle', image: '/pic3.jpg', aspect: 'normal' },
  { id: 4, title: 'Sports', image: '/pic4.jpg', aspect: 'normal' },
  { id: 5, title: 'Pro Show Night', image: '/pic5.jpg', aspect: 'tall' },
  { id: 6, title: 'Coding Sprint', image: '/pic6.jpg', aspect: 'wide' },
  { id: 7, title: 'Treasure Hunt', image: '/pic7.jpg', aspect: 'wide' },
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
                style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
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
                style={{ backgroundImage: `url(${selected.image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
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
