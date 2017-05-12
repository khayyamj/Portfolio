import React from 'react'
import Header from '../../Components/Header/Header'
import Skills from '../../Components/Skills/Skills'
import './Main.scss'

const Main = React.createClass({
  render () {
    return (
      <div className='index' id='page-top'>
        <Header />
        <Skills />
      </div>
    )
  }
})

export default Main
