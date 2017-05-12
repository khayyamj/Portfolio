import React from 'react'
// import troop51Image from '../../images/portfolio/Troop51.png'
import './Projects.scss'

const Projects = React.createClass({
  render () {
    return (
      <div className='projects'>
        <div className='projects-container'>
          <div className='project-display troop51'>
            <h3 className='project-title-bold'>Project Title</h3>
            <p className='project-title-highlights'>Top Skills Used</p>
          </div>
          <div className='project-display topsecret'>
            <h3 className='project-title-bold'>Project Title</h3>
            <p className='project-title-highlights'>Top Skills Used</p>
          </div>
          <div className='project-display'>
            <h3 className='project-title-bold'>Project Title</h3>
            <p className='project-title-highlights'>Top Skills Used</p>
          </div>
          <div className='project-display'>
            <h3 className='project-title-bold'>Project Title</h3>
            <p className='project-title-highlights'>Top Skills Used</p>
          </div>
          <div className='project-display'>
            <h3 className='project-title-bold'>Project Title</h3>
            <p className='project-title-highlights'>Top Skills Used</p>
          </div>
          <div className='project-display'>
            <h3 className='project-title-bold'>Project Title</h3>
            <p className='project-title-highlights'>Top Skills Used</p>
          </div>
        </div>
      </div>
    )
  }
})

export default Projects
