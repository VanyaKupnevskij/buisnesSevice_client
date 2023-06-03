import styles from './style.module.scss';
import pageGlobalStyles from '../../../pageGlobalStyle.module.scss';
import globalStyles from '../../../../styles/global.module.scss';

import SideNavbar from '../../../../components/SideNavbar';
import GeneralModule from '../../../../modules/GeneralModule';

function GeneralPage() {
  return (
    <div className={globalStyles.container}>
      <div className={globalStyles.inner}>
        <SideNavbar currentTab="general" />

        <div className={pageGlobalStyles.content}>
          <h1 className={pageGlobalStyles.title}>Основне</h1>
          <div className={pageGlobalStyles.content_inner}>
            <GeneralModule />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralPage;
