import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './Die'
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

function App() {

  const generateDieValue = () => {

    const dieValueArray = ["😂", "😍", "😭", "🤑", "😇", "🥵"]
    return {
      id: nanoid(),
      value: dieValueArray[Math.floor(Math.random() * 6)],
      isHeld: false
    }
  }
  
  const allNewDice = () => {
    let randomNumberArray = []; 
    for(let i = 0; i < 10; i++){
        randomNumberArray[i] = generateDieValue()
    }
    return randomNumberArray;
  }

  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const allEqual = dice.every(die => die.value === dice[0].value)

    if(allEqual && allHeld){
      setTenzies(true)
    }

  }, [dice])

  useEffect(() => {
    tenzies ? console.log("You Won!") : ""
  }, [tenzies])

  const rollDice = () => {
    setDice(currentDice => 
      currentDice.map(die => {
        return die.isHeld ? 
        die : generateDieValue()
      }) 
    )
  }

  const holdDice = (id) => {
      setDice(currentDice => 
        currentDice.map(die => {
          return die.id === id ?
            {...die, isHeld: !die.isHeld} :
            die
        })
      )
  }
  
  const diceElements = dice.map(dieNumber => (
        <Die 
          key = {dieNumber.id} 
          value = {dieNumber.value} 
          isHeld = {dieNumber.isHeld}
          holdDice = {() => holdDice(dieNumber.id)}
        />
  ))

  return (
    <>
      <main>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all emojis are the same.<br/> Click each tile to freeze
        it at its current value between rolls.</p>
        {tenzies && <Confetti className='confetti'/>}
        <div className="container">
            {diceElements}
        </div>
          <button 
            onClick={tenzies ? () => {
              setDice(allNewDice())
              setTenzies(false);
            } : 
            rollDice
          }>{tenzies ? "Reset" : "Roll"}</button>
      </main>
    </>
  )
}

export default App
