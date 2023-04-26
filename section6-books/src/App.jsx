import React,{ useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from './components/BookList'


const App = () => {
  const [books,setBooks] = useState([])

  const handleCreateBook = (title) => {
    const updatedBooks = [ ...books,
      { 
        id: Math.round(Math.random() * 9999),
        title: title
      }
    ]
    setBooks(updatedBooks)
  } 

  const handleDeleteBook = (id) => {
    const updatedBooks = books.filter((book)=> {
      return book.id !== id
    })
    setBooks(updatedBooks)
  }

  const handleEditBook = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if(book.id === id) {
        return { ...book, title: newTitle }
      }
      return book
    })
    setBooks(updatedBooks)
  }

  


  return (
    <div className="app">
      <BookList books={books} onDelete={handleDeleteBook} onEdit={handleEditBook} />
      <BookCreate onCreate={handleCreateBook}/>
    </div>
  )
}

export default App ;
