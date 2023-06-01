import styles from './style.module.scss';
import pageGlobalStyles from '../../../pageGlobalStyle.module.scss';
import globalStyles from '../../../../styles/global.module.scss';

import Loading from '../../../../ui/Loading';
import SideNavbar from '../../../../components/SideNavbar';

function GraphicsPage() {
  return (
    <div className={globalStyles.container}>
      <div className={globalStyles.inner}>
        <SideNavbar currentTab="graphics" />

        <div className={pageGlobalStyles.content}>
          <h1 className={pageGlobalStyles.title}>Графіки</h1>
          <div className={pageGlobalStyles.content_inner}>
            <Loading />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphicsPage;
