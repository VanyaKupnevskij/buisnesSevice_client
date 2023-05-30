import styles from './style.module.scss';
import globalStyles from '../../../../styles/global.module.scss';

import Button, { SecondaryButton } from '../../../../ui/Button';
import SelectInput from '../../../../ui/SelectInput';
import TextInput from '../../../../ui/TextInput';
import Loading from '../../../../ui/Loading';
import SideNavbar from '../../../../components/SideNavbar';

function MainPage() {
  const listFilms = [
    { key: 'lsfe8i8rj', value: 'Avatar' },
    { key: 'sefsee4hy', value: 'Story Toy 3' },
    { key: 'Jl45ie1fe', value: 'Super car' },
  ];

  return (
    <div className={globalStyles.container}>
      <div className={globalStyles.inner}>
        <SideNavbar currentTab="home" />

        <div className={styles.content}>
          <h1 className={styles.title}>Головна</h1>

          <Button>Button Click me</Button>
          <Button>Button Click me</Button>
          <Button>Button Click me</Button>
          <SecondaryButton>Button Secondary</SecondaryButton>
          <SecondaryButton>Button Secondary</SecondaryButton>
          <SecondaryButton>Button Secondary</SecondaryButton>
          <SecondaryButton>Button Secondary</SecondaryButton>
          <TextInput
            name={'Namecinema'}
            placeholder={'Enter name cinema...'}
            label={'Name cinema'}
          />
          <TextInput name={'cinema'} placeholder={'Enter name cinema...'} label={'cinema'} />
          <TextInput name={'name'} placeholder={'Enter name cinema...'} label={'Name'} />
          <SelectInput
            options={listFilms}
            name={'Film'}
            placeholder={'Select film...'}
            label={'Film'}
          />
          <Loading />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
