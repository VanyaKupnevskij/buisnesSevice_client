import styles from './style.module.scss';
import pageGlobalStyles from '../../../pageGlobalStyle.module.scss';
import globalStyles from '../../../../styles/global.module.scss';

import Loading from '../../../../ui/Loading';
import SideNavbar from '../../../../components/SideNavbar';
import Numeric from '../../../../components/Numeric';
import NumericPercent from '../../../../components/NumericPercent';
import NumericTotal from '../../../../components/NumericTotal';

function GeneralPage() {
  const data1 = [10, 5, 30, 25, 46];
  const data2 = [40, 29, 35, 15, 24, 35, 55, 24, 40, 29, 35, 15, 15, 24, 35, 15];
  const data3 = [10, 5, 30, 25, 46, 24, 35, 15];
  const data4 = [...data1].reverse();

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

            <Loading />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralPage;
