import styles from './style.module.scss';
import panelGlobalStyle from '../panelGlobalStyle.module.scss';

function Modal({ title = '', datas = [], onClose = () => {} }) {
  const classNameRoot = `${styles.root} ${panelGlobalStyle.panel}`;

  return (
    <>
      <div className={classNameRoot}>
        <h6 className={styles.title} onClick={onClose}>
          {title}
        </h6>
        <dl className={styles.content}>
          {datas.map((data) => (
            <div key={data.title} className={styles.row}>
              <dt className={styles.row_title}>{data.title}</dt>
              <dd className={styles.row_value}>{data.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className={styles.back_panel}></div>
    </>
  );
}

export default Modal;
