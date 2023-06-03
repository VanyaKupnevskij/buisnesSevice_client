import styles from './style.module.scss';

import Loading from '../../../../ui/Loading';

import { useHttp } from '../../../../hooks/http.hook';
import { useEffect, useState } from 'react';
import { useAuth } from '../../../../hooks/auth.hook';
import Table from '../../../../components/Table';

function WorkersModule() {
  const { loading, request, error } = useHttp();
  const { token } = useAuth();
  const [workers, setWorkers] = useState([]);
  const [renderList, setRenderList] = useState([]);

  const titles = ["Повне ім'я", 'Рахунок', 'Спеціалізація', 'Зарплатня'];

  async function loadWorkers() {
    try {
      const responceWorkers = await request({
        url: '/workers',
        method: 'get',
        bearerToken: token,
      });

      setWorkers(responceWorkers);

      const formatedList = responceWorkers.map((worker) => {
        return {
          full_name: worker.full_name,
          money_account: worker.money_account,
          realm: worker.realm,
          salary: worker.salary + ' грн.',
        };
      });

      setRenderList(formatedList);
    } catch (e) {}
  }

  useEffect(() => {
    loadWorkers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {error ? (
        <div className={styles.error_message}>{error.message}</div>
      ) : (
        <Table className={styles.table} titles={titles} contents={renderList} hasFilter={false} />
      )}
    </>
  );
}

export default WorkersModule;
