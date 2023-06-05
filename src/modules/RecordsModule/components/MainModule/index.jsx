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
  const [workers, setWorkers] = useState([]);
  const [renderList, setRenderList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [dataModal, setDataModal] = useState([]);
  const [filterDate, setFilterDate] = useState({
    start_date: undefined,
    end_date: undefined,
  });

  const titles = ['Дата', 'Рахунок', 'Джерело', 'Прибуток', 'Витрати', 'Оплачено'];
  const tamplateDataModal = {
    date: { name: 'date', title: 'Дата', value: null, type: 'date' },
    money_account: {
      name: 'money_account',
      title: 'Рахунок',
      value: null,
      type: 'select',
      options: [
        { key: 'fop', value: 'ФОП' },
        { key: 'monobank', value: 'Monobank' },
        { key: 'privatebank', value: 'Privatebank' },
        { key: 'cash', value: 'Готівка' },
        { key: 'another', value: 'Інше' },
      ],
    },
    comment: { name: 'comment', title: 'Коментар', value: null, type: 'text', multiple: true },
    source_from: {
      name: 'source_from',
      title: 'Джерело',
      value: null,
      type: 'select',
      options: [
        { key: 'ads', value: 'Реклама' },
        { key: 'taget', value: 'Тарегет' },
        { key: 'salary', value: 'Зарплатня' },
        { key: 'subscribe', value: 'Підписка' },
        { key: 'another', value: 'Інше' },
      ],
    },
    income: { name: 'income', title: 'Прибуток', value: null, type: 'number' },
    costs: { name: 'costs', title: 'Витрати', value: null, type: 'number' },
    already_paid: { name: 'already_paid', title: 'Оплачено', value: null, type: 'number' },
    worker_full_name: {
      name: 'worker_full_name',
      title: "Ім'я працівника",
      value: null,
      type: 'select',
      options: [],
    },
    worker_money_account: {
      name: 'worker_money_account',
      title: 'Рахунок працівника',
      value: null,
      type: 'select',
      options: [
        { key: 'fop', value: 'ФОП' },
        { key: 'monobank', value: 'Monobank' },
        { key: 'privatebank', value: 'Privatebank' },
        { key: 'cash', value: 'Готівка' },
        { key: 'another', value: 'Інше' },
      ],
    },
    worker_realm: {
      name: 'worker_realm',
      title: 'Спеціалізація працівника',
      value: null,
      type: 'select',
      options: [
        { key: 'seo', value: 'Сео' },
        { key: 'tageter', value: 'Таргетолог' },
        { key: 'menager', value: 'Менеджер' },
        { key: 'director', value: 'Діректор' },
        { key: 'designer', value: 'Дизайнер' },
        { key: 'programmer', value: 'Программіст' },
        { key: 'another', value: 'Інше' },
      ],
    },
    worker_salary: {
      name: 'worker_salary',
      title: 'Зарплатня працівника',
      value: null,
      type: 'number',
    },
  };

  function handleClickRow(index) {
    const tempDataModal = JSON.parse(JSON.stringify(tamplateDataModal));
    tempDataModal.worker_full_name.options = workers.map((worker) => {
      return { key: worker.id, value: worker.full_name };
    });

    for (const [key, value] of Object.entries(records.resultRecords[index])) {
      if (tempDataModal[key]) {
        let formatedValue = value;

        switch (key) {
          case 'date':
            formatedValue = new Date(formatedValue).toLocaleDateString('en-CA');
            break;
        }

        tempDataModal[key].value = formatedValue;
      }
    }

    setDataModal(Object.values(tempDataModal));
    setShowModal(true);
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
      const responceWorkers = await request({
        url: '/workers',
        method: 'get',
        bearerToken: token,
      });

      setRecords(responceRecords);
      setWorkers(responceWorkers);

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
      {showModal && (
        <Modal title={'Деталі запису'} datas={dataModal} onClose={handleCloseModal} isInput />
      )}
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
