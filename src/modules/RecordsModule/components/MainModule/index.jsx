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
  const [regimModal, setRegimModal] = useState('update');
  const [dataModal, setDataModal] = useState([]);
  const [filterDate, setFilterDate] = useState({
    start_date: undefined,
    end_date: undefined,
  });

  const titles = ['Дата', 'Рахунок', 'Джерело', 'Прибуток', 'Витрати', 'Оплачено'];
  const tamplateDataModal = {
    id: { name: 'id', title: 'id', value: null, type: 'text', type_display: 'none' },
    date: { name: 'date', title: 'Дата', value: null, type: 'date', type_display: 'all' },
    money_account: {
      name: 'money_account',
      title: 'Рахунок',
      value: 'Не задано',
      type: 'select',
      type_display: 'all',
      options: [
        { key: 'ФОП', value: 'ФОП' },
        { key: 'Monobank', value: 'Monobank' },
        { key: 'Privatebank', value: 'Privatebank' },
        { key: 'Готівка', value: 'Готівка' },
        { key: 'Інше', value: 'Інше' },
        { key: null, value: 'Не задано' },
      ],
    },
    comment: {
      name: 'comment',
      title: 'Коментар',
      value: '',
      type: 'text',
      type_display: 'all',
      multiple: true,
    },
    source_from: {
      name: 'source_from',
      title: 'Джерело',
      value: 'Не задано',
      type: 'select',
      type_display: 'all',
      options: [
        { key: 'Реклама', value: 'Реклама' },
        { key: 'Тарегет', value: 'Тарегет' },
        { key: 'Зарплатня', value: 'Зарплатня' },
        { key: 'Підписка', value: 'Підписка' },
        { key: 'Інше', value: 'Інше' },
        { key: null, value: 'Не задано' },
      ],
    },
    income: {
      name: 'income',
      title: 'Прибуток',
      value: 0,
      type: 'number',
      type_display: 'all',
    },
    costs: {
      name: 'costs',
      title: 'Витрати',
      value: 0,
      type: 'number',
      type_display: 'all',
    },
    already_paid: {
      name: 'already_paid',
      title: 'Оплачено',
      value: 0,
      type: 'number',
      type_display: 'all',
    },
    worker_full_name: {
      name: 'worker_full_name',
      title: "Ім'я працівника",
      value: 'Не задано',
      type: 'select',
      type_display: 'all',
      options: [],
    },
    worker_money_account: {
      name: 'worker_money_account',
      title: 'Рахунок працівника',
      value: 'Не задано',
      type: 'select',
      type_display: 'readonly',
      options: [
        { key: 'ФОП', value: 'ФОП' },
        { key: 'Monobank', value: 'Monobank' },
        { key: 'Privatebank', value: 'Privatebank' },
        { key: 'Готівка', value: 'Готівка' },
        { key: 'Інше', value: 'Інше' },
        { key: null, value: 'Не задано' },
      ],
    },
    worker_realm: {
      name: 'worker_realm',
      title: 'Спеціалізація працівника',
      value: 'Не задано',
      type: 'select',
      type_display: 'readonly',
      options: [
        { key: 'Сео', value: 'Сео' },
        { key: 'Таргетолог', value: 'Таргетолог' },
        { key: 'Менеджер', value: 'Менеджер' },
        { key: 'Діректор', value: 'Діректор' },
        { key: 'Дизайнер', value: 'Дизайнер' },
        { key: 'Программіст', value: 'Программіст' },
        { key: 'Інше', value: 'Інше' },
        { key: null, value: 'Не задано' },
      ],
    },
    worker_salary: {
      name: 'worker_salary',
      title: 'Зарплатня працівника',
      value: null,
      type: 'number',
      type_display: 'readonly',
    },
  };

  function handleClickRow(index) {
    setRegimModal('update');

    const tempDataModal = JSON.parse(JSON.stringify(tamplateDataModal));
    tempDataModal.worker_full_name.options = workers.map((worker) => {
      return { key: worker.full_name, value: worker.full_name };
    });
    tempDataModal.worker_full_name.options.push({
      key: null,
      value: 'Не задано',
    });

    for (const [key, value] of Object.entries(records.resultRecords[index])) {
      if (tempDataModal[key]) {
        let formatedValue = value ?? 'Не задано';

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
  async function updateRecord(newDataRecord) {
    try {
      const responceRecord = await request({
        url: '/records/update/' + newDataRecord.id,
        method: 'put',
        bearerToken: token,
        data: newDataRecord,
      });
    } catch (e) {}
  }
  async function createRecord(newDataRecord) {
    try {
      const responceRecord = await request({
        url: '/records/create',
        method: 'post',
        bearerToken: token,
        data: newDataRecord,
      });
    } catch (e) {}
  }
  async function deleteRecord(id) {
    try {
      await request({
        url: '/records/' + id,
        method: 'delete',
        bearerToken: token,
      });
    } catch (e) {}
  }

  useEffect(() => {
    loadRecords();
  }, []);

  function handleCloseModal() {
    setShowModal(false);
  }

  async function handleClickDelete(id) {
    handleCloseModal();

    await deleteRecord(id);

    await loadRecords();
  }

  async function handleSubmitModal(newValues, regim) {
    const formatedValues = {};
    let income = null;
    let costs = null;
    let already_paid = null;
    let worker_full_name = null;

    for (let parameter of newValues) {
      formatedValues[parameter.name] = parameter.value;

      switch (parameter.name) {
        case 'income':
          income = parameter.value;
          break;
        case 'costs':
          costs = parameter.value;
          break;
        case 'already_paid':
          already_paid = parameter.value;
          break;
        case 'worker_full_name':
          worker_full_name = parameter.value;
          break;
      }
    }

    formatedValues.income = {
      price: income,
    };

    formatedValues.costs = {
      workers_id: workers.find((worker) => worker.full_name === worker_full_name)?.id,
      price: costs,
      already_paid: already_paid,
    };

    if (regimModal === 'update') {
      await updateRecord(formatedValues);
    } else {
      formatedValues.projects_id = selectedId;
      await createRecord(formatedValues);
    }

    handleCloseModal();

    await loadRecords();
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

  function handleClickCreate() {
    setRegimModal('create');

    const tempDataModal = JSON.parse(JSON.stringify(tamplateDataModal));
    tempDataModal.worker_full_name.options = workers.map((worker) => {
      return { key: worker.full_name, value: worker.full_name };
    });
    tempDataModal.worker_full_name.options.push({
      key: null,
      value: 'Не задано',
    });

    setDataModal(Object.values(tempDataModal));
    setShowModal(true);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {showModal && (
        <Modal
          title={'Деталі запису'}
          datas={dataModal}
          onClose={handleCloseModal}
          onChange={handleSubmitModal}
          onClickDelete={handleClickDelete}
          isInput
          hasDelete
          regimModal={regimModal}
        />
      )}
      {error ? (
        <div className={styles.error_message}>{error.message}</div>
      ) : (
        <>
          <Table
            titles={titles}
            contents={renderList}
            onClick={handleClickRow}
            onClickCreate={handleClickCreate}
            onChangeStartDate={handleChangeStartDate}
            onChangeEndDate={handleChangeEndDate}
            onApplyFilter={handleApplyFilter}
            startDateValue={filterDate.start_date}
            endDateValue={filterDate.end_date}
            typeFileter="date"
            hasCreate
          />
        </>
      )}
    </>
  );
}

export default RecordsModule;
