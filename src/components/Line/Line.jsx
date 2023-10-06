import { WORD_LENGTH } from "../../constants/constants"
import './Line.css'

export default function Line({ guess }) {

  const tiles = []

  for (let i = 0; i < WORD_LENGTH; i++) {
    const character = guess[i]
    tiles.push(
      <div key={i} className='tile'>
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
