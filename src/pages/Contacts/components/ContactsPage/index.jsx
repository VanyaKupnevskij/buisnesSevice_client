import styles from './style.module.scss';
import globalStyles from '../../../../styles/global.module.scss';

import Loading from '../../../../ui/Loading';
import SideNavbar from '../../../../components/SideNavbar';

function ContactsPage() {
  return (
    <div className={globalStyles.container}>
      <div className={globalStyles.inner}>
        <SideNavbar currentTab="contacts" />

        <div className={styles.content}>
          <h1 className={styles.title}>Контакти</h1>

          <Loading />
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;
