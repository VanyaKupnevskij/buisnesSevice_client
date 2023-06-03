import { useState } from 'react';
import styles from './style.module.scss';

function TextInput({
  value,
  onChange = () => {},
  style,
  className = '',
  type = 'text',
  name,
  placeholder = '',
  label,
}) {
  const _className = `${styles.root} ${className}`;

  return (
    <div style={style} className={_className}>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
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
