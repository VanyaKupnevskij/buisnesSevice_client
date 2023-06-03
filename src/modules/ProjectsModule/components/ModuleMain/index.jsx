import panelGlobalStyle from '../../../../components/panelGlobalStyle.module.scss';
import styles from './style.module.scss';

import Loading from '../../../../ui/Loading';

import { useHttp } from '../../../../hooks/http.hook';
import { useEffect, useState } from 'react';
import { useProject } from '../../helpers/projects.hook';
import { useAuth } from '../../../../hooks/auth.hook';
import Table from '../../../../components/Table';

function ProjectsModule() {
  const { selectProject, selectedId } = useProject();
  const { loading, request, error, clearError } = useHttp();
  const { token } = useAuth();
  const [projects, setProjects] = useState([]);

  const titlesIncome = ['ID', 'ID користувача', 'Назва', 'Категорія'];

  function indefOfSelected(id) {
    for (let index in projects) {
      if (projects[index].id === id) {
        return Number(index);
      }
    }
    return 0;
  }

  async function loadProjects() {
    try {
      const responceProjects = await request({
        url: '/projects',
        method: 'get',
        bearerToken: token,
      });

      setProjects(responceProjects);
    } catch (e) {}
  }

  useEffect(() => {
    loadProjects();
  }, []);

  function handleSelect(index) {
    selectProject(projects[index].id);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Table
        title={'Проекти'}
        titles={titlesIncome}
        contents={projects}
        onClick={handleSelect}
        selectedRow={indefOfSelected(selectedId)}
        hasFilter={false}
      />
    </>
  );
}

export default ProjectsModule;
