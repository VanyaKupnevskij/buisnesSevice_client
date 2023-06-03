import styles from './style.module.scss';

import Loading from '../../../../ui/Loading';
import Modal from '../../../../components/Modal';
import Table from '../../../../components/Table';
import Numeric from '../../../../components/Numeric';
import NumericTotal from '../../../../components/NumericTotal';
import NumericPercent from '../../../../components/NumericPercent';

import { useHttp } from '../../../../hooks/http.hook';
import { useEffect, useState } from 'react';
import { useAuth } from '../../../../hooks/auth.hook';
import { useProject } from '../../../../hooks/projects.hook';

function GeneralModule() {
  const { loading, request, error } = useHttp();
  const { selectedId } = useProject();
  const { token } = useAuth();
  const [records, setRecords] = useState([]);
  const [renderListIncome, setRenderListIncome] = useState([]);
  const [renderListCosts, setRenderListCosts] = useState([]);
  const [marginality, setMarginality] = useState({ lastYear: 0, lastMonth: 0, lastDay: 0 });
  const [profitability, setProfitability] = useState({ lastYear: 0, lastMonth: 0, lastDay: 0 });
  const [income, setIncome] = useState({ lastYear: 0, lastMonth: 0, lastDay: 0 });
  const [costs, setCosts] = useState({ lastYear: 0, lastMonth: 0, lastDay: 0 });

  //////////////////////////
  const [showModal, setShowModal] = useState(false);

  const data1 = [10, 5, 30, 25, 46];
  const data2 = [40, 29, 35, 15, 24, 35, 55, 24, 40, 29, 35, 15, 15, 24, 35, 15];
  const data3 = [10, 5, 30, 25, 46, 24, 35, 15];
  const data4 = [...data1].reverse();

  const titlesIncome = ['Дата', 'Рахунок', 'Джерело', 'Прибуток'];
  const titlesCosts = ['Дата', 'Рахунок', 'Джерело', 'Витрати', 'Вже оплачено'];

  const [dataModal, setDataModal] = useState([
    { title: 'Дата', value: '26.09.2023' },
    { title: 'Джерело', value: 'ЗП працівнику' },
    { title: 'Прибуток', value: '3 800 $' },
    { title: 'Витрати', value: '1 670 $' },
    { title: 'Маржа', value: '1 830 $' },
    { title: 'Маржинальність', value: '53.6 %' },
    { title: 'Рентабельність', value: '53.6 %' },
  ]);

  function handleClickRow(index) {
    setShowModal(true);

    const tempDataModal = [];
    for (const [key, value] of Object.entries(records.resultRecords[index])) {
      tempDataModal.push({
        title: key,
        value: value,
      });
    }

    setDataModal(tempDataModal);
  }

  function handleCloseModal() {
    setShowModal(false);
  }
  /////////////////////////

  async function loadRecords() {
    try {
      const responceRecords = await request({
        url: '/records',
        method: 'get',
        bearerToken: token,
        params: {
          projects_id: selectedId,
        },
      });

      setRecords(responceRecords);

      const formatedListIncome = responceRecords.resultRecords.map((record) => {
        return {
          date: new Date(record.date).toLocaleDateString(),
          money_account: record.money_account,
          source_from: record.source_from,
          income: record.income + ' грн.',
        };
      });
      const formatedListCosts = responceRecords.resultRecords.map((record) => {
        return {
          date: new Date(record.date).toLocaleDateString(),
          money_account: record.money_account,
          source_from: record.source_from,
          costs: record.costs + ' грн.',
          already_paid: record.already_paid + ' грн.',
        };
      });

      setRenderListIncome(formatedListIncome);
      setRenderListCosts(formatedListCosts);

      // set additional information
      const yearsInfo = Object.entries(responceRecords.additionalInfo.year);
      const monthsInfo = Object.entries(responceRecords.additionalInfo.month);
      const daysInfo = Object.entries(responceRecords.additionalInfo.day);
      setIncome({
        lastYear: yearsInfo[yearsInfo.length - 1][1].income,
        lastMonth: monthsInfo[monthsInfo.length - 1][1].income,
        lastDay: daysInfo[daysInfo.length - 1][1].income,
      });
      setCosts({
        lastYear: yearsInfo[yearsInfo.length - 1][1].costs,
        lastMonth: monthsInfo[monthsInfo.length - 1][1].costs,
        lastDay: daysInfo[daysInfo.length - 1][1].costs,
      });
      setMarginality({
        lastYear: yearsInfo[yearsInfo.length - 1][1].marginality,
        lastMonth: monthsInfo[monthsInfo.length - 1][1].marginality,
        lastDay: daysInfo[daysInfo.length - 1][1].marginality,
      });
      setProfitability({
        lastYear: yearsInfo[yearsInfo.length - 1][1].profitability,
        lastMonth: monthsInfo[monthsInfo.length - 1][1].profitability,
        lastDay: daysInfo[daysInfo.length - 1][1].profitability,
      });
    } catch (e) {}
  }

  useEffect(() => {
    loadRecords();
  }, []);

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
          <Numeric title={'Кількість працівників'} value={7000} duration={800} startDelay={1000} />
          <Numeric
            title={'Прибуток за останній день'}
            value={income.lastDay}
            duration={800}
            startDelay={1000}
          />
          <Numeric
            title={'Витрати за останній день'}
            value={costs.lastDay}
            duration={800}
            startDelay={1000}
          />

          <NumericTotal
            title={'Прибуток за останній рік'}
            value={income.lastYear}
            percent={79}
            graphData={data1}
            startDelay={1000}
          />
          <NumericTotal
            title={'Прибуток за останній місяць'}
            value={income.lastMonth}
            percent={-10}
            graphData={data1}
            startDelay={1000}
          />

          <NumericTotal
            title={'Витрати за останній рік'}
            value={costs.lastYear}
            percent={3}
            graphData={data1}
            startDelay={1000}
          />
          <NumericTotal
            title={'Витрати за останній місяць'}
            value={costs.lastMonth}
            percent={-6}
            graphData={data1}
            startDelay={1000}
          />

          <NumericPercent
            title={'Маржинальність за останній рік'}
            value={marginality.lastYear}
            startDelay={1000}
          />
          <NumericPercent
            title={'Маржинальність за останній місяць'}
            value={marginality.lastMonth}
            startDelay={1000}
          />
          <NumericPercent
            title={'Маржинальність за останній день'}
            value={marginality.lastDay}
            startDelay={1000}
          />

          <NumericPercent
            title={'Рентабельність за останній рік'}
            value={profitability.lastYear}
            startDelay={1000}
          />
          <NumericPercent
            title={'Рентабельність за останній місяць'}
            value={profitability.lastMonth}
            startDelay={1000}
          />
          <NumericPercent
            title={'Рентабельність за останній день'}
            value={profitability.lastDay}
            startDelay={1000}
          />

          <Table
            title={'Прибутки'}
            titles={titlesIncome}
            contents={renderListIncome}
            onClick={handleClickRow}
          />
          <Table
            title={'Витрати'}
            titles={titlesCosts}
            contents={renderListCosts}
            onClick={handleClickRow}
          />
        </>
      )}
    </>
  );
}

export default GeneralModule;
