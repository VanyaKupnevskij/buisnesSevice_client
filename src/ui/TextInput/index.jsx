import { useState } from 'react';
import styles from './style.module.scss';

function TextInput({
  initValue = '',
  onChange = () => {},
  style,
  className = '',
  type = 'text',
  name,
  placeholder = '',
  label,
}) {
  const _className = `${styles.root} ${className}`;
  const [value, setValue] = useState(initValue);

  function handleChange(e) {
    setValue(e.target.value);
    onChange(e.target.value);
  }

  return (
    <div style={style} className={_className}>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={handleChange}
        id={name}
        name={name}
        placeholder={placeholder}
      />
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

export default TextInput;
