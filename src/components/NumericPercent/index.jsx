import styles from './style.module.scss';

import LittleGraphic from '../../ui/LittleGraphic';

function NumericPercent({ title, value, percent, graphData }) {
  const valueFormated = formatedNumber(value);
  const percentFormated = (percent > 0 ? 'Up to ' : 'Down to ') + percent + ' %';
  const classNamePercent =
    styles.percent + ' ' + (percent > 0 ? styles.percent_green : styles.percent_red);

  return (
    <div className={styles.root}>
      <div className={styles.text_block}>
        <h6 className={styles.title}>{title}</h6>
        <b className={styles.value}>{valueFormated}</b>
        <p className={classNamePercent}>{percentFormated}</p>
      </div>
      <LittleGraphic className={styles.graphic} />
    </div>
  );
}

function formatedNumber(number) {
  const integerPart = Number(number.toFixed(2)).toLocaleString();

  let parts = integerPart.split(',');
  if (!parts[1]) parts.push('00');
  parts[1] = parts[1].padEnd(2, '0');

  return `$ ${parts[0]}.${parts[1]}`;
}

export default NumericPercent;
