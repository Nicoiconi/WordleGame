import Board from '../Board/Board'
import './App.css'
import { words } from '../../data/words.json'
import { useEffect, useState } from 'react'

function App() {
  const [solution, setSolution] = useState('')

  async function getRandomeWord() {
    const randomeWord = words[Math.floor(Math.random() * words.length)]
    setSolution(randomeWord)
  }

  useEffect(() => {
    getRandomeWord()
  }, [])

  return (
    <div className='App'>
      <h1>Wordle Game</h1>
      {solution}
      <Board />
    </div>
  )
}

export default App
