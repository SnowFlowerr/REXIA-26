import styles from './Logo.module.css';

const Logo = ({ size = 'md', animate = false, className = '' }) => {
  const sizes = {
    sm: { width: 120, star: 0.5 },
    md: { width: 180, star: 0.7 },
    lg: { width: 320, star: 1 },
    xl: { width: 500, star: 1.5 },
    hero: { width: 700, star: 2 },
  };

  const s = sizes[size] || sizes.md;

  return (
    <div className={`${styles.logo} ${animate ? styles.animate : ''} ${className}`} style={{ width: s.width }}>
      <img 
        src="/logo.png" 
        alt="REXIA Logo" 
        className={styles.logoImg} 
      />
    </div>
  );
};

export default Logo;
