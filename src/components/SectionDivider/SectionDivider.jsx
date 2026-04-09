import styles from './SectionDivider.module.css';

const SectionDivider = ({ variant = 'default' }) => {
  return (
    <div className={`${styles.divider} ${styles[variant]}`}>
      <div className={styles.line} />
      <div className={styles.glow} />
      <div className={styles.orb}>
        <div className={styles.orbInner} />
        <div className={styles.orbRing} />
      </div>
      <div className={styles.line} />
    </div>
  );
};

export default SectionDivider;
