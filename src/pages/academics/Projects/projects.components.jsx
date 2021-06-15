import React from "react";

import "./projects.styles.scss";
import ProjectData from "../Projects/projects.data";

const ProjectsList = () => {
  return ProjectData.map((item) => (
    <div  key={item.id}>
      <div className="collection-item-projects">
        <img className="image-projects" src={item.img}></img>
        <div className="name-projects">{item.name}</div>
        <div className="collection-footer">
          <a class="link" href={item.content}>
            {item.content.substr(0, 51)}
          </a>
        </div>
      </div>
    </div>
  ));
};

const Projects =()=>{
  return(
  <div className='collections-projects'>
    <ProjectsList></ProjectsList>
  </div>
  )
}
export default Projects;
