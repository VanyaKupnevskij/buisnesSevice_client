import styles from './style.module.scss';
import panelGlobalStyle from '../panelGlobalStyle.module.scss';

function Numeric({ title, value }) {
  const classNameRoot = `${styles.root} ${panelGlobalStyle.panel}`;

  return (
    <div className={classNameRoot}>
      <h6 className={styles.title}>{title}</h6>
      <b className={styles.value}>{value}</b>
    </div>
  );
}

export default Numeric;
