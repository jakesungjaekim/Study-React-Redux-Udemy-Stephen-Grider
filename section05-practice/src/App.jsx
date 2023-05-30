import React,{ useCallback, useState, useMemo } from 'react'
import searchImages from './api'
import Searchbar from './components/Searchbar'
import ImageList from './components/ImageList'

const App = () => {
  const [images, setImages] = useState([])

  const handleSubmit = useCallback(async (term) => {
    const result = await searchImages(term)

    setImages(result)
  },[])

  const memorizedImageList = useMemo(() => {
    return <ImageList images={images}/>
  },[images])

  return (
    <div>
      <Searchbar onSubmit={handleSubmit}/>
      {memorizedImageList}
    </div>
  )
}

export default App