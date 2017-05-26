import React from 'react'
import SocialMediaIcons from '../SocialMedia/SocialMediaIcons'
import './Resume.scss'
const pathToResume = require('../../assets/resume.pdf')

const Resume = () => {
  return (
    <div className='resume-container' id='resume'>
      <h1 className='resume-title'>My Resume</h1>
      <p className='resume-subtitle'>Professional Web Developer Resume</p>
      <div className='resume-profile-picture' />
      <p className='resume-boldtext'>Khayyam Jones</p>
      <p className='resume-text'>Full Stack Web Developer</p>
      <SocialMediaIcons />
      <p className='resume-text'>Click <a href={pathToResume}>here</a> to download my resume</p>
    </div>
  )
}

export default Resume
