import React, {useState} from 'react'

const Searchbar = ({ onSubmit }) => {
  const [term, setTerm] = useState('')

  const handleChange = (e) => {
    setTerm(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    onSubmit(term)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>Enter the Term</label>
      <input type="text" value={term} onChange={handleChange}/>
    </form>
  )
}

export default Searchbar