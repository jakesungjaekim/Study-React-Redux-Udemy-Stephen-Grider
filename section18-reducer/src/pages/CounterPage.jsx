import React, { useState, useEffect } from 'react'
import Button from '../components/Button';
import Panel from '../components/Panel';


const CounterPage = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    setValueToAdd(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setCount(count + valueToAdd);
    setValueToAdd(0);
  }

  return (
    <Panel className="m-3">
      <h1 className='text-lg'>Current Count : { count }</h1>
      <div className='flex flex-row'>
        <Button success onClick={increment}>Increment</Button>
        <Button success onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Add a lot !</label>
        <input 
          value={valueToAdd || ''}
          onChange={handleChange}
          type="number" className='p-1 m-3 border border-gray-300 bg-gray-50'/>
        <Button success >Add it</Button>
      </form>
    </Panel>
  )
}

export default CounterPage
