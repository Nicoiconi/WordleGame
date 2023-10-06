import { WORD_LENGTH } from "../../constants/constants"
import './Line.css'

export default function Line({ guess, isFinal, solution }) {

  const tiles = []

  for (let i = 0; i < WORD_LENGTH; i++) {
    const character = guess[i]
    let className = 'tile'
    if (isFinal) {
      if (character === solution[i]) {
        className += ' correct'
      } else if (solution.includes(character)) {
        className += ' close'
      } else {
        className += ' incorrect'
      }
    }

    tiles.push(
      <div key={i} className={className}>
        {character}
      </div>
    )
  }

  return (
    <div className="line">
      {tiles}
    </div>
  )
}
