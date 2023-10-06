import { useState } from "react"
import Line from "../Line/Line"

export default function Board() {

  const [guesses, setGuesses] = useState(Array(6).fill(null))

  return (
    <div className="board">
      {
        guesses.map(guess => {
          return (
            <div key={guess}>
              <Line guess={guess ?? ''} />
            </div>
          )
        })
      }
    </div>
  )
}
