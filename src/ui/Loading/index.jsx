import styles from './style.module.scss';

function Loading() {
  return (
    <div className={styles.spinner}>
      <div className={styles.ripple}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
