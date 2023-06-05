import styles from './style.module.scss';
import panelGlobalStyle from '../panelGlobalStyle.module.scss';

import TableUI from '../../ui/TableUI';
import SelectInput from '../../ui/SelectInput';
import DatePicker from '../../ui/DatePicker';
import Button from '../../ui/Button';

function Table({
  className,
  style,
  title,
  titles,
  contents,
  onClick = () => {},
  onChangeStartDate = () => {},
  onChangeEndDate = () => {},
  onApplyFilter = () => {},
  startDateValue,
  endDateValue,
  selectedRow = -1,
  hasFilter = true,
  typeFileter = 'select',
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
        {hasFilter &&
          (typeFileter === 'select' ? (
            <SelectInput className={styles.filter_time} options={listFilms} name={'filter'} />
          ) : (
            <>
              <DatePicker
                init={new Date(Date.now())}
                name={'start_date'}
                onChange={onChangeStartDate}
                label={'З'}
                value={startDateValue}
              />
              <DatePicker
                init={new Date(Date.now())}
                name={'end_date'}
                onChange={onChangeEndDate}
                label={'До'}
                value={endDateValue}
              />
              <Button style={{ marginLeft: 'auto' }} onClick={onApplyFilter}>
                Застосувати
              </Button>
            </>
          ))}
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
