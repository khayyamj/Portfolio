import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BoardSquare from './boardSquare'
import Knight from './knight'
import { canMoveKnight, moveKnight } from './game'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class Board extends Component {
  renderSquare (i) {
    const x = i % 8
    const y = Math.floor(i / 8)
    return (
      <div key={i}
        style={{ width: '12.5%', height: '12.5%' }}>
        <BoardSquare x={x}
          y={y}>
          {this.renderPiece(x, y)}
        </BoardSquare>
      </div>
    )
  }

  renderPiece (x, y) {
    const [knightX, knightY] = this.props.knightPosition
    if (x === knightX && y === knightY) {
      console.log('renderPiece --> ', x, y)
      return <Knight />
    }
  }

  handleSquareClick (toX, toY) {
    if (canMoveKnight(toX, toY)) {
      moveKnight(toX, toY)
    }
  }

  render () {
    const squares = []
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i))
    }
    console.log('board render -->')
    return (
      <div className='crazyknightboard' style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    )
  }
}

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
}

export default DragDropContext(HTML5Backend)(Board)
