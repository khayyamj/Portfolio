import React from 'react'
import './NavBar.scss'

const pageName = 'Khayyam.ga'

const links = [
  {
    name: 'Skills',
    href: '#skills'
  },
  {
    name: 'Projects',
    href: '#projects'
  },
  {
    name: 'Resume',
    href: '#resume'
  },
  {
    name: 'Contact',
    href: '#Contact'
  }
]

const NavBar = () => {
  return (
    <nav className='navbar navbar-default navbar-fixed-top'>
      <div>
        <a className='navbar-header' href='#page-top'>{pageName}</a>
      </div>
      <div>
        <ul className='navbar-right'>
          {links.map(link => {
            return (
              <li key={link.name}>
                <a className='navbar-item' href={link.href}>{link.name}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
