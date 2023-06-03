import styles from './style.module.scss';

import Loading from '../../../../ui/Loading';

import { useHttp } from '../../../../hooks/http.hook';
import { useEffect, useState } from 'react';
import { useProject } from '../../../../hooks/projects.hook';
import { useAuth } from '../../../../hooks/auth.hook';
import Table from '../../../../components/Table';

function ProjectsModule() {
  const { selectProject, selectedId } = useProject();
  const { loading, request, error } = useHttp();
  const { token } = useAuth();
  const [projects, setProjects] = useState([]);
  const [renderList, setRenderList] = useState([]);

  const titles = ['Назва', 'Категорія'];

  function indefOfSelected(id) {
    for (let index in projects) {
      if (projects[index].id === id) {
        return Number(index);
      }
    }
    return -1;
  }

  async function loadProjects() {
    try {
      const responceProjects = await request({
        url: '/projects',
        method: 'get',
        bearerToken: token,
      });

      setProjects(responceProjects);

      const formatedList = responceProjects.map((project) => {
        return { name: project.name, category: project.category };
      });

      setRenderList(formatedList);
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
      {error ? (
        <div className={styles.error_message}>{error.message}</div>
      ) : (
        <Table
          className={styles.table}
          titles={titles}
          contents={renderList}
          onClick={handleSelect}
          selectedRow={indefOfSelected(selectedId)}
          hasFilter={false}
        />
      )}
    </>
  );
}

export default ProjectsModule;
