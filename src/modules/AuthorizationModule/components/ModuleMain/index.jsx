import panelGlobalStyle from '../../../../components/panelGlobalStyle.module.scss';
import styles from './style.module.scss';

import Button from '../../../../ui/Button';
import TextInput from '../../../../ui/TextInput';
import { useHttp } from '../../../../hooks/http.hook';
import { useState } from 'react';
import { useAuth } from '../../../../hooks/auth.hook';

function AuthorizationModule() {
  const classNameRoot = `${panelGlobalStyle.panel} ${styles.root} `;
  const { login, isAuthorization, name, email } = useAuth();
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({ email: '', password: '', name: '' });

  async function handleClickLogin() {
    try {
      const { token, name, email } = await request({
        url: '/auth/login',
        method: 'post',
        data: { email: form.email, password: form.password },
      });

      login(token, name, email);

      setForm({ email: '', password: '', name: '' });
    } catch (e) {}
  }

  function handleChange(name, newValue) {
    clearError();

    setForm({ ...form, [name]: newValue });
  }

  return (
    <>
      {isAuthorization ? (
        <div className={classNameRoot}>
          <h6 className={styles.title}>Дані користувача</h6>
          <dl className={styles.list_info}>
            <div className={styles.row}>
              <dt>Ім'я</dt>
              <dd>{name}</dd>
            </div>
            <div className={styles.row}>
              <dt>Email</dt>
              <dd>{email}</dd>
            </div>
          </dl>
        </div>
      ) : (
        <div className={classNameRoot}>
          <h6 className={styles.title}>Вхід</h6>
          {error && <p className={styles.error_message}>{error.message}</p>}
          <TextInput
            name={'email'}
            placeholder={'Уведіть електронну пошту...'}
            label={'Email'}
            value={form.email}
            onChange={(value) => handleChange('email', value)}
          />
          <TextInput
            name={'password'}
            type="password"
            placeholder={'Уведіть пароль...'}
            label={'Пароль'}
            value={form.password}
            onChange={(value) => handleChange('password', value)}
          />
          <Button className={styles.submit_button} onClick={handleClickLogin}>
            Увійти
          </Button>
          <p className={styles.another_link}>реєстрація</p>
        </div>
      )}
    </>
  );
}

export default AuthorizationModule;
