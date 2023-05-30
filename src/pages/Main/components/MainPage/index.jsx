import styles from './style.module.scss';

import Button, { SecondaryButton } from '../../../../ui/Button';
import SelectInput from '../../../../ui/SelectInput';
import TextInput from '../../../../ui/TextInput';
import {
  LogoutIcon,
  GraphicIcon,
  WorkersIcon,
  RecordsIcon,
  GeneralIcon,
  ProjectsIcon,
  ContactsIcon,
  HomeIcon,
} from '../../../../ui/Icon';

function MainPage() {
  const listFilms = [
    { key: 'lsfe8i8rj', value: 'Avatar' },
    { key: 'sefsee4hy', value: 'Story Toy 3' },
    { key: 'Jl45ie1fe', value: 'Super car' },
  ];

  return (
    <>
      <Button>Button Click me</Button>
      <LogoutIcon />
      <GraphicIcon />
      <WorkersIcon />
      <RecordsIcon />
      <GeneralIcon />
      <ProjectsIcon />
      <ContactsIcon />
      <HomeIcon />
      <SecondaryButton>Button Secondary</SecondaryButton>
      <TextInput name={'name'} placeholder={'Enter name cinema...'} label={'Name cinema'} />
      <SelectInput
        options={listFilms}
        name={'Film'}
        placeholder={'Select film...'}
        label={'Film'}
      />
    </>
  );
}

export default MainPage;
