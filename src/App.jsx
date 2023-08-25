import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './Die'
import {nanoid} from "nanoid"

function App() {



  const allNewDice = () => {
    let randomNumberArray = []; 
    for(let i = 0; i < 10; i++){
        randomNumberArray[i] = {
          id: nanoid(),
          value: Math.floor(Math.random() * (6 - 1 + 1)) + 1,
          isHeld: false
        }
    }
    return randomNumberArray;
  }

  const [dice, setDice] = useState(allNewDice())

  const rollDice = () => {
    setDice(allNewDice())
  }
  
  const diceElements = dice.map((dieNumber) => <Die key = {dieNumber.id} value = {dieNumber.value}/> )

  return (
    <>
      <main>
        <div className="container">
            {diceElements}
        </div>
          <button onClick={rollDice}>Roll</button>
      </main>
    </>
  )
}

export default App
