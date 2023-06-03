import styles from './style.module.scss';
import panelGlobalStyle from '../panelGlobalStyle.module.scss';

import TableUI from '../../ui/TableUI';
import SelectInput from '../../ui/SelectInput';

function Table({
  className,
  style,
  title,
  titles,
  contents,
  onClick = () => {},
  selectedRow = -1,
  hasFilter = true,
}) {
  const classNameRoot = `${styles.root} ${panelGlobalStyle.panel} ${className}`;

  const listFilms = [
    { key: 'all_time', value: 'За весь час' },
    { key: 'year_time', value: 'За рік' },
    { key: 'month_time', value: 'За місяць' },
  ];

  return (
    <div className={classNameRoot}>
      <div className={styles.top_controls} style={style}>
        <h6 className={styles.title}>{title}</h6>
        {hasFilter && (
          <SelectInput className={styles.filter_time} options={listFilms} name={'filter'} />
        )}
      </div>
      <TableUI
        titles={titles}
        contents={contents}
        selectedRow={selectedRow}
        onClick={onClick}
        style={{ '--count-column': titles.length }}
      />
    </div>
  );
}

export default Table;
