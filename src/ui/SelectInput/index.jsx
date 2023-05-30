import styles from './style.module.scss';
import arrowImage from '../images/Arrow.svg';
import { useState } from 'react';

function SelectInput({ style, className, options = [], name, placeholder = '', label }) {
  const _className = `${styles.root} ${className}`;
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div style={style} className={_className}>
      <select
        className={styles.input}
        value={value}
        onChange={handleChange}
        id={name}
        name={name}
        placeholder={placeholder}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.key} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <img className={styles.arrow} src={arrowImage} alt="arrow" />
    </div>
  );
}

export default SelectInput;
