import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './FlyingAstronaut.module.css';

const FlyingAstronaut = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax effects for different astronauts
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -1500]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className={styles.container}>
      {/* Astro 1 - Top Leftish */}
      <motion.div 
        className={styles.astro}
        style={{ 
          y: y1, 
          rotate,
          top: '40%', 
          left: '10%' 
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.4, scale: 0.8 }}
        transition={{ duration: 2 }}
      >
        <img src="/astronaut.png" alt="Flying Astronaut" />
      </motion.div>

      {/* Astro 2 - Bottom Rightish */}
      <motion.div 
        className={styles.astro}
        style={{ 
          y: y2, 
          rotate: useTransform(rotate, r => r * -0.5),
          top: '70%', 
          right: '5%' 
        }}
        initial={{ opacity: 0, scale: 0.3 }}
        whileInView={{ opacity: 0.3, scale: 0.6 }}
        transition={{ duration: 3, delay: 0.5 }}
      >
        <img src="/astronaut.png" alt="Flying Astronaut" />
      </motion.div>

      {/* Astro 3 - Mid Section */}
      <motion.div 
        className={styles.astro}
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, -2000]),
          top: '150%', 
          left: '70%',
          rotate: useTransform(rotate, r => r * 0.8)
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        transition={{ duration: 2.5 }}
      >
        <img src="/astronaut.png" alt="Flying Astronaut" />
      </motion.div>
    </div>
  );
};

export default FlyingAstronaut;
