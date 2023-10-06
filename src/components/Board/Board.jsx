import { useEffect, useState } from "react"
import Line from "../Line/Line"

export default function Board() {

  const [guesses, setGuesses] = useState(Array(6).fill(null))
  const [currentGuess, setCurrentGuess] = useState('')

  useEffect(() => {
    const handleType = (event) => {
      setCurrentGuess(prevGuess => prevGuess + event.key)
    }

    window.addEventListener('keydown', handleType)

    return () => window.removeEventListener('keydown', handleType)
  }, [])

  return (
    <div className="board">
      {
        guesses.map((guess, guessIndex) => {
          const isCurrentGuess = guessIndex === guesses.findIndex(val => val == null)
          return (
            <div key={guess}>
              <Line guess={isCurrentGuess ? currentGuess : guess ?? ''} />
            </div>
          )
        })
      }
    </div>
  )
}
