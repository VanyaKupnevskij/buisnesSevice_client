import styles from './style.module.scss';
import panelGlobalStyle from '../panelGlobalStyle.module.scss';

import PercentHalfCircle from '../../ui/PercentHalfCircle';

function NumericPercent({ title, value }) {
  const classNameValue =
    styles.value +
    ' ' +
    (value < 30 ? styles.value_bad : value > 70 ? styles.value_good : styles.value_normal);
  const classNameRoot = `${styles.root} ${panelGlobalStyle.panel}`;

  return (
    <div className={classNameRoot}>
      <h6 className={styles.title}>{title}</h6>
      <b className={classNameValue}>{value} %</b>
      <PercentHalfCircle className={styles.percent} />
    </div>
  );
}

export default NumericPercent;
