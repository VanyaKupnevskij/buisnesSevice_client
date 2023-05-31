import styles from './style.module.scss';

function PercentHalfCircle({ className }) {
  const _className = `${styles.root} ${className || ''}`;

  return <div className={_className}>PERCENT</div>;
}

export default PercentHalfCircle;
