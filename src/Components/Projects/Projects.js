import React from 'react'
import { Link } from 'react-router-dom'
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
              {project.projProps === '' ? <a href={project.link}><div className={`project-display ${project.id}`} /></a> : <Link to={project.projProps}><div className={`project-display ${project.id}`} /></Link>}
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
