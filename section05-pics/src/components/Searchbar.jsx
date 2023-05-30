import React from 'react'
import './Searchbar.css'
import { useState } from 'react'

const Searchbar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const handleChange = (e) => {
    setTerm(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('I Need to tell the Parent about some data')
    onSubmit(term)
  }

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input 
          type="text" 
          value={term}
          onChange={handleChange}
          placeholder='Enter Term' />
      </form>
    </div>
  )
}

export default Searchbar;