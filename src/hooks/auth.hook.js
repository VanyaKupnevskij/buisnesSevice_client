import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logoutAction } from '../modules/AuthorizationModule/store/reducer';

const storageName = 'userData';

export function useAuth() {
  const [ready, setReady] = useState(false);
  const { isAuthorization, name, email, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const login = useCallback((token, name, email) => {
    dispatch(loginAction({ token, name, email }));
  }, []);

  const logout = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data && data.token) {
      login(data.token, data.name, data.email);
    }

    setReady(true);
  }, [login]);

  return { login, logout, isAuthorization, name, email, token, ready };
}
