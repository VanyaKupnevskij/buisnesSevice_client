import styles from './style.module.scss';
import panelGlobalStyle from '../panelGlobalStyle.module.scss';

import TableUI from '../../ui/TableUI';
import SelectInput from '../../ui/SelectInput';

function Table({ title, titles, contents }) {
  const classNameRoot = `${styles.root} ${panelGlobalStyle.panel}`;

  const listFilms = [
    { key: 'all_time', value: 'За весь час' },
    { key: 'year_time', value: 'За рік' },
    { key: 'month_time', value: 'За місяць' },
  ];

  return (
    <div className={classNameRoot}>
      <div className={styles.top_controls}>
        <h6 className={styles.title}>{title}</h6>
        <SelectInput className={styles.filter_time} options={listFilms} name={'filter'} />
      </div>
      <TableUI titles={titles} contents={contents} selectedRow={3} />
    </div>
  );
}

export default Table;
