import React from 'react'
import './NavBar.scss'

const pageName = 'Khayyam.ga'

const NavBar = () => {
  return (
    <nav className='navbar navbar-default navbar-fixed-top'>
      <div>
        <a className='navbar-header' href='#page-top'>{pageName}</a>
      </div>
      <div>
        <ul className='navbar-right'>
          <li>
            <a className='navbar-item' href='#services'>Skills</a>
          </li>
          <li>
            <a href='#portfolio'>Projects</a>
          </li>
          <li>
            <a href='#team'>Resume</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
