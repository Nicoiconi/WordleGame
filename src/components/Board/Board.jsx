import { useEffect, useState } from "react"
import Line from "../Line/Line"

export default function Board({ solution }) {

  const [guesses, setGuesses] = useState(Array(6).fill(null))
  const [currentGuess, setCurrentGuess] = useState('')
  const [isGameOver, setIsGameOver] = useState(false)

  useEffect(() => {
    const handleType = (event) => {
      if (isGameOver) {
        return
      }

      if (event.key === 'Enter') {
        if (currentGuess.length !== 5) {
          return
        }

        const isCorrect = solution === currentGuess
        if (isCorrect) {
          setIsGameOver(true)
        }
      }

      if (event.key === 'Backspace') {
        setCurrentGuess(currentGuess.slice(0, -1))
        return
      }

      if (currentGuess.length >= 5) {
        return
      }

      setCurrentGuess(prevGuess => prevGuess + event.key)
    }

    window.addEventListener('keydown', handleType)

    return () => window.removeEventListener('keydown', handleType)
  }, [currentGuess, isGameOver, solution])

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
