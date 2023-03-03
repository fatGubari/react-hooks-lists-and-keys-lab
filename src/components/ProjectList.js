import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const arrayOfObject = projects.map((OneProject) => (
    <ProjectItem
      key={OneProject.id}
      name={OneProject.name}
      about={OneProject.about}
      technologies={OneProject.technologies}
    />
  ))

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {arrayOfObject}
      </div>
    </div>
  );
}

export default ProjectList;
