import styles from './style.module.scss';
import panelGlobalStyle from '../panelGlobalStyle.module.scss';

import TextInput from '../../ui/TextInput';

import closeImage from '../images/close.svg';
import SelectInput from '../../ui/SelectInput';
import DatePicker from '../../ui/DatePicker';

function Modal({ title = '', datas = [], onClose = () => {}, isInput = false }) {
  const classNameRoot = `${styles.root} ${panelGlobalStyle.panel}`;

  return (
    <>
      <div className={classNameRoot}>
        <h6 className={styles.title}>{title}</h6>
        <button className={styles.close_button} onClick={onClose}>
          <img src={closeImage} alt="close" />
        </button>
        <dl className={styles.content}>
          {datas.map((data) => {
            if (!data.value) return;

            return (
              <div key={data.title} className={styles.row}>
                <dt className={styles.row_title}>
                  {data.type === 'number' ? data.title + ' (грн)' : data.title}
                </dt>
                <dd className={styles.row_value}>
                  {isInput ? renderInput(data) : <>{data.value}</>}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
      <div className={styles.back_panel}></div>
    </>
  );
}

function renderInput(data) {
  switch (data.type) {
    case 'text':
      return (
        <TextInput
          label={data.title.split(' ')[0]}
          name={data.name}
          value={data.value}
          type={data.type}
          placeholder={`Уведіть ${data.title.toLowerCase().split(' ')[0]} ...`}
          multiple={data.multiple}
        />
      );
    case 'number':
      return (
        <TextInput
          label={data.title.split(' ')[0]}
          name={data.name}
          value={data.value}
          type={data.type}
          placeholder={`Уведіть ${data.title.toLowerCase().split(' ')[0]} ...`}
        />
      );
    case 'select':
      return (
        <SelectInput
          label={data.title.split(' ')[0]}
          name={data.name}
          type={data.type}
          placeholder={`Уведіть ${data.title.toLowerCase().split(' ')[0]} ...`}
          options={data.options}
        />
      );
    case 'date':
      return <DatePicker label={data.title.split(' ')[0]} name={data.name} value={data.value} />;
  }
}

export default Modal;
