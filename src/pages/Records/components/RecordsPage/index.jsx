import styles from './style.module.scss';
import globalStyles from '../../../../styles/global.module.scss';

import Loading from '../../../../ui/Loading';
import SideNavbar from '../../../../components/SideNavbar';

function RecordsPage() {
  return (
    <div className={globalStyles.container}>
      <div className={globalStyles.inner}>
        <SideNavbar currentTab="records" />

        <div className={styles.content}>
          <h1 className={styles.title}>Записи</h1>

          <Loading />
        </div>
      </div>
    </div>
  );
}

export default RecordsPage;
