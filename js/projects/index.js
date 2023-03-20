import { getProjects } from './projects.js';
import { projectTemplate } from './view.js';

const projectList = document.getElementById('projects');

const renderProjects = async () => {
  const projects = await getProjects();

  projectList.innerHTML = projects.map(project => (
    projectTemplate(project.image, project.label)
  )).join('');
};

renderProjects();
