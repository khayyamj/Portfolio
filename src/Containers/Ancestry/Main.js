import React from 'react'
import Body from './Body'
import SideBar from './SideBar'
import PropTypes from 'prop-types'
import './Main.scss'

const Ancestry = (props) => {
  return (
    <div className='main-body-container'>
      <Body />
      <SideBar openModal={props.openModal} />
    </div>
  )
}

Ancestry.propTypes = {
  openModal: PropTypes.func.isRequired
}

export default Ancestry
