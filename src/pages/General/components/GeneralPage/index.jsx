import styles from './style.module.scss';
import pageGlobalStyles from '../../../pageGlobalStyle.module.scss';
import globalStyles from '../../../../styles/global.module.scss';

import Loading from '../../../../ui/Loading';
import SideNavbar from '../../../../components/SideNavbar';
import Numeric from '../../../../components/Numeric';
import NumericPercent from '../../../../components/NumericPercent';

function GeneralPage() {
  return (
    <div className={globalStyles.container}>
      <div className={globalStyles.inner}>
        <SideNavbar currentTab="general" />

        <div className={pageGlobalStyles.content}>
          <h1 className={pageGlobalStyles.title}>Основне</h1>

          <Numeric title={'Кількість працівників'} value={7} />
          <NumericPercent title={'Прибуток'} value={248384.0734} percent={27} />
          <NumericPercent title={'Витрати'} value={140233.39355} percent={-4} />

          <Loading />
        </div>
      </div>
    </div>
  );
}

export default GeneralPage;
