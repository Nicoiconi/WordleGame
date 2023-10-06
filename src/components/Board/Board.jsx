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

        const newGuesses = [...guesses]
        newGuesses[guesses.findIndex(val => val == null)] = currentGuess
        setGuesses(newGuesses)
        setCurrentGuess('')

        const isCorrect = solution === currentGuess.toUpperCase()
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

      const isLetter = event.key.match(/^[a-z]{1}$/) != null
      if (isLetter) {
        setCurrentGuess(prevGuess => prevGuess + event.key)
      }
    }

    window.addEventListener('keydown', handleType)

    return () => window.removeEventListener('keydown', handleType)
  }, [currentGuess, isGameOver, solution, guesses])

  return (
    <div className="board">
      {
        guesses.map((guess, guessIndex) => {
          const isCurrentGuess = guessIndex === guesses.findIndex(val => val == null)
          return (
            <div key={guessIndex}>
              <Line
                guess={isCurrentGuess ? currentGuess : guess ?? ''}
                isFinal={!isCurrentGuess && guess != null}
                solution={solution.toLowerCase()}
              />
            </div>
          )
        })
      }
    </div>
  )
}
