import styles from './style.module.scss';

import { Link } from 'react-router-dom';

import Button, { SecondaryButton } from '../../../../ui/Button';
import SelectInput from '../../../../ui/SelectInput';
import TextInput from '../../../../ui/TextInput';
import IconLink from '../../../../ui/IconLink';
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

import profileImage from '../../../../ui/images/default_avatar.png';

function MainPage() {
  const listFilms = [
    { key: 'lsfe8i8rj', value: 'Avatar' },
    { key: 'sefsee4hy', value: 'Story Toy 3' },
    { key: 'Jl45ie1fe', value: 'Super car' },
  ];

  return (
    <>
      <Button>Button Click me</Button>
      <SecondaryButton>Button Secondary</SecondaryButton>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Link to="/profile" style={{ width: 'fit-content' }}>
          <img
            src={profileImage}
            style={{ height: '7rem', borderRadius: '50%', backgroundColor: 'white' }}
          />
        </Link>

        <br />
        <br />

        <IconLink linkPath="/home" icon={<HomeIcon />}>
          Головна
        </IconLink>
        <IconLink linkPath="/contacts" icon={<ContactsIcon />}>
          Контакти
        </IconLink>
        <br />
        <IconLink linkPath="/projects" icon={<ProjectsIcon />}>
          Проекти
        </IconLink>
        <IconLink linkPath="/general" icon={<GeneralIcon />} isActive>
          Основне
        </IconLink>
        <IconLink linkPath="/records" icon={<RecordsIcon />} isActive>
          Записи
        </IconLink>
        <IconLink linkPath="/workers" icon={<WorkersIcon />}>
          Працівники
        </IconLink>
        <IconLink linkPath="/graphics" icon={<GraphicIcon />}>
          Графіки
        </IconLink>
        <br />
        <br />
        <IconLink icon={<LogoutIcon />}>Вийти</IconLink>
      </div>
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
