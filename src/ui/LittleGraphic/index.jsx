import styles from './style.module.scss';

function LittleGraphic({ className }) {
  const _className = `${styles.root} ${className || ''}`;

  return <div className={_className}>GRAPH</div>;
}

export default LittleGraphic;
