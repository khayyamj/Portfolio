import React from 'react'
import PropTypes from 'prop-types'
// import ReactDOM from 'react-dom'
import Board from './board'
import { observe } from './game'
import './Knight.scss'

// let display = window.location.href.indexOf('knight') > 0
//
// observe(knightPosition => {
//   ReactDOM.render(
//     display ? <Board knightPosition={knightPosition} />
//       : <div />
//         , document.getElementById('rootk')
//   )
// })

class DnDKnight extends React.Component {
  render () {
    <Board knightPosition={knightPosition} />
  }
}

DnDKnight.propTypes = {
  knightPosition: PropTypes.array
}
export default observe(knightPosition)(DnDKnight)
