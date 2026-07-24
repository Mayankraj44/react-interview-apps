import React from 'react'
import "../index.css"

const BOMB_ICON = '💣'

const FLAG_ICON = '🚩'

export const Cell = ({ clickHandler, cell, showMines }) => {
  return (
    <div
      onClick={clickHandler}
      onContextMenu={clickHandler}
      className={`cell ${cell?.isOpened ? 'open' : 'closed'} ${cell?.isOpened && cell?.neighborMines ? `mines-${cell.neighborMines}` : ''}`}
    >
      {showMines && cell?.isMine && BOMB_ICON}
      {!showMines && cell?.isFlagged && FLAG_ICON}
      {cell?.isOpened && !cell?.isMine && !!cell?.neighborMines && cell?.neighborMines}
    </div>
  )
}
