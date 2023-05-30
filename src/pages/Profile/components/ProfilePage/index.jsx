import styles from './style.module.scss';
import pageGlobalStyles from '../../../pageGlobalStyle.module.scss';
import globalStyles from '../../../../styles/global.module.scss';

import Loading from '../../../../ui/Loading';
import SideNavbar from '../../../../components/SideNavbar';
import TextInput from '../../../../ui/TextInput';
import Button from '../../../../ui/Button';

function ProfilePage() {
  return (
    <div className={globalStyles.container}>
      <div className={globalStyles.inner}>
        <SideNavbar currentTab="profile" />

        <div className={pageGlobalStyles.content}>
          <h1 className={pageGlobalStyles.title}>Профіль</h1>

          <Loading />
          <TextInput name={'email'} placeholder={'Уведіть електронну пошту...'} label={'Email'} />
          <TextInput
            name={'password'}
            type="password"
            placeholder={'Уведіть пароль...'}
            label={'Пароль'}
          />
          <Button>Увійти</Button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
