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
  const data2 = [40, 29, 35, 15, 24];

  return (
    <div className={globalStyles.container}>
      <div className={globalStyles.inner}>
        <SideNavbar currentTab="general" />

        <div className={pageGlobalStyles.content}>
          <h1 className={pageGlobalStyles.title}>Основне</h1>

          <Numeric title={'Кількість працівників'} value={7} />
          <NumericTotal title={'Прибуток'} value={248384.0734} percent={27} graphData={data1} />
          <NumericTotal title={'Витрати'} value={140233.39355} percent={-4} graphData={data2} />
          <NumericPercent title={'Рентабельність'} value={65} />

          <Loading />
        </div>
      </div>
    </div>
  );
}

export default GeneralPage;
