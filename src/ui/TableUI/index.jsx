import styles from './style.module.scss';

function TableUI({ style, className = '', titles = [], contents = [], selectedRow = null }) {
  const _className = `${styles.table} ${className}`;

  return (
    <table className={_className} style={style}>
      <thead>
        <tr>
          {titles.map((title) => (
            <th key={title} className={styles.table_title}>
              {title}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {contents.map((row, id) => {
          return (
            <tr key={id} className={selectedRow === id ? styles.selected : ''}>
              {row.map((data, id) => (
                <td key={id}>{data}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableUI;