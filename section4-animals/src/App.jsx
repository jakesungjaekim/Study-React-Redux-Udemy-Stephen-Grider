
import React, { useState } from 'react'
import './App.css'
import AnimalShow from './AnimalShow'



function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow','dog', 'gator', 'horse']
  const randomIndex = Math.floor(Math.random() * animals.length)
  return animals[randomIndex]
}

const App = () => {
  const[number,setNumber] = useState(0)
  const[animals,setAnimals] = useState([])

  const handleClick = () => {
    console.log('Button was Clicked!')
    setNumber(number + 1)

    if(number >= 3) {
      setNumber(3)
    }
  } 

  const handleShowAnimal = () => {
    setAnimals([...animals, getRandomAnimal()])
    console.log(animals)
  }

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow key={index} type={animal} />
  })


  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animal!</button>
        <p>Animals to show: {number}</p>
      {
        number === 3 ?
        <p>You can`t add more animals </p> : null
      }
      <button onClick={handleShowAnimal}>Show Animals</button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  )
}

export default App