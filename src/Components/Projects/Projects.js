import React from 'react'
// import troop51Image from '../../images/portfolio/Troop51.png'
import './Projects.scss'

const projects = [
  {
    title: 'Troop 51',
    skills: 'React - Node - SQL',
    id: 'troop51',
    projProps: ''
  },
  {
    title: 'Top Secret',
    skills: 'Angular - Node - MongoDB',
    id: 'topsecret',
    projProps: ''
  },
  {
    title: 'Troop 51',
    skills: 'Other Skills Used',
    id: 'project3',
    projProps: ''
  },
  {
    title: 'Troop 51',
    skills: 'Other Skills Used',
    id: 'project4',
    projProps: ''
  },
  {
    title: 'Troop 51',
    skills: 'Other Skills Used',
    id: 'project5',
    projProps: ''
  },
  {
    title: 'Troop 51',
    skills: 'Other Skills Used',
    id: 'project6',
    projProps: ''
  }
]

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <h2>Projects</h2>
      <p>Development and Programming Projects</p>
      <div className='projects-container'>
        {projects.map(project => {
          return (
            <div className='projects-individual' key={project.id}>
              <div className={`project-display ${project.id}`} />
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
