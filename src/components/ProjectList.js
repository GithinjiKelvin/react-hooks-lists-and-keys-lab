import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  // const renderTech = projects.technologies.map((proj) => {
  //   return <h3 >{proj}</h3>
  // })
  const renderTe = projects.map((project) => {
    console.log(project.technologies)
    const eachTech = project.technologies.map((tech) => {
      return <h1>{tech}</h1>
    })
    return <span>{eachTech}</span>
  })

  const renderProject = projects.map((project) => {
    return <div id="projects">
        <h1 key={project.id}>{project.name}</h1>
          <h3>{project.about}</h3>
          <span>{project.technologies}</span>
          {/* <span>{renderTe}</span> */}
          
    </div>
    
  })

  

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{renderProject/* render ProjectItem components here */}</div>
    </div>
  );
}

export default ProjectList;
