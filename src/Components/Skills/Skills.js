import React from 'react'
import './Skills.scss'
import reactLogo from '../../images/icons/react.png'
import angularLogo from '../../images/icons/angular-color.svg'
import cssLogo from '../../images/icons/css3-color.svg'
import expressLogo from '../../images/icons/express.png'
import gitLogo from '../../images/icons/git.svg'
import gulpLogo from '../../images/icons/gulp.svg'
import htmlLogo from '../../images/icons/html5-color.svg'
import javascriptLogo from '../../images/icons/javascript.svg'
import jQueryLogo from '../../images/icons/jQuery.png'
import nodeLogo from '../../images/icons/npm.png'
import sassLogo from '../../images/icons/sass.png'
import sqlLogo from '../../images/icons/sql.png'

const Skills = React.createClass({
  render () {
    return (
      <div className='skills'>
        <div className='skills-title'>
          <h2>Skills</h2>
          <p>Top Proficiencies</p>
        </div>
        <div className='skills-set'>
          <div className='skills-individual'>
            <img src={reactLogo} className='skills-image' alt='ReactJS' />
            <p className='words'>React JS</p>
          </div>
          <div className='skills-individual'>
            <img src={angularLogo} className='skills-image' alt='AngularJS' />
            <p className='words'>Angular JS</p>
          </div>
          <div className='skills-individual'>
            <img src={javascriptLogo} className='skills-image' alt='Javascript' />
            <p className='words'>Javascript</p>
          </div>
          <div className='skills-individual'>
            <img src={jQueryLogo} className='skills-image' alt='jQuery' />
            <p className='words'>jQuery</p>
          </div>
          <div className='skills-individual'>
            <img src={nodeLogo} className='skills-image' alt='NodeJS' />
            <p className='words'>Node JS</p>
          </div>
          <div className='skills-individual'>
            <img src={expressLogo} className='skills-image' alt='Express' />
            <p className='words'>Express</p>
          </div>
          <div className='skills-individual'>
            <img src={htmlLogo} className='skills-image' alt='HTML5' />
            <p className='words'>HTML5</p>
          </div>
          <div className='skills-individual'>
            <img src={cssLogo} className='skills-image' alt='CSS3' />
            <p className='words'>CSS3</p>
          </div>
          <div className='skills-individual'>
            <img src={gitLogo} className='skills-image' alt='Git' />
            <p className='words'>Git & Github</p>
          </div>
          <div className='skills-individual'>
            <img src={sqlLogo} className='skills-image' alt='SQL Databases' />
            <p className='words'>SQL</p>
          </div>
          <div className='skills-individual'>
            <img src={sassLogo} className='skills-image' alt='SASS' />
            <p className='words'>SASS / SCSS</p>
          </div>
          <div className='skills-individual'>
            <img src={gulpLogo} className='skills-image' alt='Gulp' />
            <p className='words'>Gulp</p>
          </div>
        </div>
      </div>
    )
  }
})

export default Skills
