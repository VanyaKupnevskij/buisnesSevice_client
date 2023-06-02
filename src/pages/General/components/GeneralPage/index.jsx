import styles from './style.module.scss';
import pageGlobalStyles from '../../../pageGlobalStyle.module.scss';
import globalStyles from '../../../../styles/global.module.scss';

import Loading from '../../../../ui/Loading';
import TextInput from '../../../../ui/TextInput';
import SideNavbar from '../../../../components/SideNavbar';
import Numeric from '../../../../components/Numeric';
import NumericPercent from '../../../../components/NumericPercent';
import NumericTotal from '../../../../components/NumericTotal';
import Table from '../../../../components/Table';

function GeneralPage() {
  const data1 = [10, 5, 30, 25, 46];
  const data2 = [40, 29, 35, 15, 24, 35, 55, 24, 40, 29, 35, 15, 15, 24, 35, 15];
  const data3 = [10, 5, 30, 25, 46, 24, 35, 15];
  const data4 = [...data1].reverse();

  const titlesIncome = ['Дата', 'Джерело', 'Маржа', 'Маржинальність', 'Рентабельність', 'Прибуток'];
  const listIncome = [
    ['20.09.2023', 'Реклама', '940 $', '53.6%', '53.6 %', '1 300 $'],
    ['22.09.2023', 'ЗП працівнику', '940 $', '53.6%', '53.6 %', '2 100 $'],
    ['23.09.2023', 'Таргетинг', '940 $', '53.6%', '53.6 %', '500 $'],
    ['26.09.2023', 'Таргетинг', '940 $', '53.6%', '53.6 %', '9 150 $'],
    ['26.09.2023', 'ЗП працівнику', '940 $', '53.6%', '53.6 %', '3 800 $'],
    ['20.09.2023', 'Реклама', '940 $', '53.6%', '53.6 %', '1 300 $'],
    ['22.09.2023', 'ЗП працівнику', '940 $', '53.6%', '53.6 %', '2 100 $'],
    ['23.09.2023', 'ЗП працівнику', '940 $', '53.6%', '53.6 %', '950 $'],
    ['26.09.2023', 'Таргетинг', '940 $', '53.6%', '53.6 %', '9 150 $'],
    ['26.09.2023', 'Підписка', '940 $', '53.6%', '53.6 %', '3 800 $'],
    ['26.09.2023', 'Підписка', '940 $', '53.6%', '53.6 %', '3 800 $'],
  ];

  return (
    <div className={globalStyles.container}>
      <div className={globalStyles.inner}>
        <SideNavbar currentTab="general" />

        <div className={pageGlobalStyles.content}>
          <h1 className={pageGlobalStyles.title}>Основне</h1>
          <div className={pageGlobalStyles.content_inner}>
            <Numeric
              title={'Кількість працівників'}
              value={7000}
              duration={800}
              startDelay={1000}
            />
            <NumericTotal
              title={'Прибуток'}
              value={248384.0734}
              percent={27}
              graphData={data1}
              startDelay={1000}
            />
            <NumericTotal
              title={'Витрати'}
              value={140233.39355}
              percent={-4}
              graphData={data2}
              startDelay={1000}
            />
            <NumericPercent title={'Маржинальність'} value={42} startDelay={1000} />
            <NumericPercent title={'Рентабельність'} value={75} startDelay={1000} />
            <NumericTotal
              title={'Прибуток'}
              value={248377684.0734}
              percent={27}
              graphData={data3}
              startDelay={1000}
            />
            <NumericTotal
              title={'Витрати'}
              value={1402247833.39355}
              percent={-4}
              graphData={data4}
              startDelay={1000}
            />
            <Table title={'Прибутки'} titles={titlesIncome} contents={listIncome} />
            <Table title={'Витрати'} titles={titlesIncome} contents={listIncome} />
            <NumericTotal
              title={'Прибуток'}
              value={248377684.0734}
              percent={27}
              graphData={data3}
              startDelay={1000}
            />
            <NumericTotal
              title={'Витрати'}
              value={1402247833.39355}
              percent={-4}
              graphData={data4}
              startDelay={1000}
            />
            <NumericTotal
              title={'Прибуток'}
              value={248377684.0734}
              percent={27}
              graphData={data3}
              startDelay={1000}
            />
            <NumericTotal
              title={'Витрати'}
              value={1402247833.39355}
              percent={-4}
              graphData={data4}
              startDelay={1000}
            />
            <NumericTotal
              title={'Прибуток'}
              value={248377684.0734}
              percent={27}
              graphData={data3}
              startDelay={1000}
            />
            <NumericTotal
              title={'Витрати'}
              value={1402247833.39355}
              percent={-4}
              graphData={data4}
              startDelay={1000}
            />
            <NumericTotal
              title={'Прибуток'}
              value={248377684.0734}
              percent={27}
              graphData={data3}
              startDelay={1000}
            />
            <NumericTotal
              title={'Витрати'}
              value={1402247833.39355}
              percent={-4}
              graphData={data4}
              startDelay={1000}
            />
            <Loading />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralPage;
