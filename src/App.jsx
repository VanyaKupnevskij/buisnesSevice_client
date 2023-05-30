import './App.scss';
import globalStyles from './styles/global.module.scss';

import { AuthContext } from '../../mern/client/src/context/authContext';
import { useAuth } from '../../mern/client/src/hooks/auth.hook';
import { useRoutes } from './hooks/routes.hook';

import Loading from './ui/Loading';

function App() {
  const { token, login, logout, userId, ready } = useAuth();
  const isAuthenticated = Boolean(token);
  const routes = useRoutes(isAuthenticated);

  if (ready === false) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={{ token, login, logout, userId, isAuthenticated }}>
      <div className={globalStyles.wrapper}>{routes}</div>
    </AuthContext.Provider>
  );
}

export default App;
