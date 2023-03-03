import React from "react";

function ProjectItem({ name, about, technologies }) {
  // for (const tech of technologies) {
  //         <span>{tech}</span>
  // }
  const technologie = technologies.map((tech) => (
    <span key = {tech}>{tech}</span>
  ))
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologie}
      </div>
    </div>
  );
}

export default ProjectItem;
