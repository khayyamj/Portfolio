import React from 'react'
import Header from '../../Components/Header/Header'
import Skills from '../../Components/Skills/Skills'
import Spacer from '../../Components/Spacer/Spacer'
import Spacer2 from '../../Components/Spacer2/Spacer2'
import Projects from '../../Components/Projects/Projects'
import './Main.scss'

const Main = React.createClass({
  render () {
    return (
      <div className='index' id='page-top'>
        <Header />
        <Skills />
        <Spacer />
        <Projects />
        <Spacer2 />
      </div>
    )
  }
})

export default Main
