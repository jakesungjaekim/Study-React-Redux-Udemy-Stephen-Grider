import React, { useState, useEffect } from 'react'
import Button from '../components/Button';
import useCounter from '../hooks/use-counter';

const CounterPage = ({ initialCount }) => {
const { count, increment } = useCounter(initialCount);

  return (
    <div>
      Count : { count }
      <Button success onClick={increment}>Increment</Button>
    </div>
  )
}

export default CounterPage
