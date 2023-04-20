import React, { useState } from 'react'
import searchImages from './api'
import Searchbar from './components/Searchbar'
import ImageList from './components/ImageList'

const App = () => {
  const [images, setImages] = useState([])

  const handleSubmit = async (term) => {
    const result = await searchImages(term)
    
    setImages(result)
  }

  return (
    <div>
      <Searchbar onSubmit={handleSubmit}/>
      <ImageList images={images}/>
    </div>
  )
}

export default App
