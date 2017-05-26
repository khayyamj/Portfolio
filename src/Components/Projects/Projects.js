import React from 'react'
// import troop51Image from '../../images/portfolio/Troop51.png'
import './Projects.scss'
import projects from './project_list'

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <h2>Projects</h2>
      <p>Development and Programming Projects</p>
      <div className='projects-container'>
        {projects.map(project => {
          return (
            <div className='projects-individual' key={project.id}>
              <a href={project.link}><div className={`project-display ${project.id}`} /></a>
              <div className='project-title'>
                <h3 className='project-title bold'>{project.title}</h3>
                <p className='project-title highlights'>{project.skills}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
