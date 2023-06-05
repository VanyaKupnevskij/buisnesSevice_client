import styles from './style.module.scss';

import Loading from '../../../../ui/Loading';
import Modal from '../../../../components/Modal';
import Table from '../../../../components/Table';

import { useHttp } from '../../../../hooks/http.hook';
import { useEffect, useState } from 'react';
import { useAuth } from '../../../../hooks/auth.hook';
import { useProject } from '../../../../hooks/projects.hook';

function RecordsModule() {
  const { loading, request, error } = useHttp();
  const { selectedId } = useProject();
  const { token } = useAuth();
  const [records, setRecords] = useState([]);
  const [renderList, setRenderList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [dataModal, setDataModal] = useState([]);
  const [filterDate, setFilterDate] = useState({
    start_date: undefined,
    end_date: undefined,
  });

  const titles = ['Дата', 'Рахунок', 'Джерело', 'Прибуток', 'Витрати', 'Оплачено'];
  const titlesModal = {
    date: 'Дата',
    money_account: 'Рахунок',
    comment: 'Коментар',
    source_from: 'Джерело',
    income: 'Прибуток',
    costs: 'Витрати',
    already_paid: 'Оплачено',
    worker_full_name: "Ім'я працівника",
    worker_money_account: 'Рахунок працівника',
    worker_realm: 'Спеціалізація працівника',
    worker_salary: 'Зарплатня працівника',
  };

  function handleClickRow(index) {
    setShowModal(true);

    const tempDataModal = [];
    for (const [key, value] of Object.entries(records.resultRecords[index])) {
      if (titlesModal[key]) {
        let formatedValue = value;

        switch (key) {
          case 'date':
            formatedValue = new Date(formatedValue).toLocaleDateString('en-CA');
            break;
        }

        tempDataModal.push({
          title: titlesModal[key],
          value: formatedValue,
        });
      }
    }

    setDataModal(tempDataModal);
  }

  async function loadRecords() {
    try {
      const params = { projects_id: selectedId };
      if (filterDate.start_date) {
        params.start_date = filterDate.start_date;
      }
      if (filterDate.end_date) {
        params.end_date = filterDate.end_date;
      }

      const responceRecords = await request({
        url: '/records',
        method: 'get',
        bearerToken: token,
        params,
      });

      setRecords(responceRecords);

      const formatedList = responceRecords.resultRecords.map((record) => {
        return {
          date: new Date(record.date).toLocaleDateString(),
          money_account: record.money_account,
          source_from: record.source_from,
          income: record.income + ' грн.',
          costs: record.costs + ' грн.',
          already_paid: record.already_paid + ' грн.',
        };
      });

      setRenderList(formatedList);
    } catch (e) {}
  }

  useEffect(() => {
    loadRecords();
  }, []);

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleChangeStartDate(newDate) {
    setFilterDate({ ...filterDate, start_date: newDate });
  }

  function handleChangeEndDate(newDate) {
    setFilterDate({ ...filterDate, end_date: newDate });
  }

  function handleApplyFilter() {
    loadRecords();
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {showModal && <Modal title={'Деталі запису'} datas={dataModal} onClose={handleCloseModal} />}
      {error ? (
        <div className={styles.error_message}>{error.message}</div>
      ) : (
        <>
          <Table
            titles={titles}
            contents={renderList}
            onClick={handleClickRow}
            onChangeStartDate={handleChangeStartDate}
            onChangeEndDate={handleChangeEndDate}
            onApplyFilter={handleApplyFilter}
            startDateValue={filterDate.start_date}
            endDateValue={filterDate.end_date}
            typeFileter="date"
          />
        </>
      )}
    </>
  );
}

export default RecordsModule;
