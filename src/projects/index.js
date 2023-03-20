import { getProjects } from './projects';
import { projectTemplate } from './view';

const projectList = document.getElementById('projects');

const renderProjects = async () => {
  const projects = await getProjects();

  projectList.innerHTML = projects.map(project => (
    projectTemplate(project.image, project.label)
  )).join('');
};

renderProjects();
