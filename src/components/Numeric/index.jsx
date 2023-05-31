import styles from './style.module.scss';

function Numeric({ title, value }) {
  return (
    <div className={styles.root}>
      <h6 className={styles.title}>{title}</h6>
      <b className={styles.value}>{value}</b>
    </div>
  );
}

export default Numeric;
