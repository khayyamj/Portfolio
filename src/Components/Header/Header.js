import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <NavBar />
      <div className='header-body'>
        <h2>Khayyam Jones</h2>
        <h1>Web Developer</h1>
      </div>
    </div>
  )
}

export default Header
