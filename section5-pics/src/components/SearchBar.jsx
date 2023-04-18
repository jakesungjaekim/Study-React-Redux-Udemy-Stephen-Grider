import React from 'react'
import { useState } from 'react'

const SearchBar = ({ onSubmit }) => {
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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input 
          type="text" 
          value={term}
          onChange={handleChange}
          placeholder='Enter Term' />
      </form>
    </div>
  )
}

export default SearchBar;