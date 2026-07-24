import React from 'react'
import { MINESWEEPER_DIFFICULTY_LEVELS } from '../../utils/const'

const DifficultyChooser = ({onDifficultySelect}) => {
  return (
    <div>
      {MINESWEEPER_DIFFICULTY_LEVELS.map((level, index) => (
        <div key={index} onClick={()=>onDifficultySelect(level)}>
          {level.level}
        </div>
      ))}
    </div>
  )
}

export default DifficultyChooser