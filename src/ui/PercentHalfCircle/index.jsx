import styles from './style.module.scss';

function PercentHalfCircle({ className, value }) {
  const _className = `${styles.root} ${className || ''}`;

  return (
    <div className={_className}>
      <div className={styles.progress_circle} style={{ '--value': value }}></div>
    </div>
  );
}

export default PercentHalfCircle;
