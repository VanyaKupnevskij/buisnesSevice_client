import styles from './style.module.scss';

import { Link } from 'react-router-dom';

import IconLink from '../../ui/IconLink';
import {
  LogoutIcon,
  GraphicIcon,
  WorkersIcon,
  RecordsIcon,
  GeneralIcon,
  ProjectsIcon,
  ContactsIcon,
  HomeIcon,
} from '../../ui/Icon';

import profileImage from '../../ui/images/default_avatar.png';
import { useContext } from 'react';
import AuthContext from '../../context/authContext';

function SideNavbar({ currentTab }) {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className={styles.side_navbar}>
      <Link className={styles.profile_link} to="/profile">
        <img src={profileImage} />
      </Link>

      <IconLink linkPath="/home" icon={<HomeIcon />} isActive={currentTab === 'home'}>
        Головна
      </IconLink>
      <IconLink linkPath="/contacts" icon={<ContactsIcon />} isActive={currentTab === 'contacts'}>
        Контакти
      </IconLink>

      {!isAuthenticated && (
        <>
          <IconLink
            linkPath="/projects"
            icon={<ProjectsIcon />}
            isActive={currentTab === 'projects'}>
            Проекти
          </IconLink>

          <h4>Деталі</h4>
          <IconLink linkPath="/general" icon={<GeneralIcon />} isActive={currentTab === 'general'}>
            Основне
          </IconLink>
          <IconLink linkPath="/records" icon={<RecordsIcon />} isActive={currentTab === 'records'}>
            Записи
          </IconLink>
          <IconLink linkPath="/workers" icon={<WorkersIcon />} isActive={currentTab === 'workers'}>
            Працівники
          </IconLink>
          <IconLink
            linkPath="/graphics"
            icon={<GraphicIcon />}
            isActive={currentTab === 'graphics'}>
            Графіки
          </IconLink>

          <IconLink className={styles.logout_link} icon={<LogoutIcon />}>
            Вийти
          </IconLink>
        </>
      )}
    </div>
  );
}

export default SideNavbar;
