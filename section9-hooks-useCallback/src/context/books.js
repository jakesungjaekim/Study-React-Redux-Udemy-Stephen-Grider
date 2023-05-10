// Step 1 Create Context
import { createContext , useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  // 무한하게 반복해서 fetch되는 bug를 useCallback으로 해결
  const fetchBooks = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data)
  }, [])
  



  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    })

    console.log(response)


    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    })

    const updatedBooks = [
      ...books,
      response.data,
    ];
    setBooks(updatedBooks);
  };

  const valueToShare = {
    //  사실 key,Value 값이 같으면 value값을 지워도 되는데, 학습 단계라서 직관적으로 내가 남김.
    books: books,
    deleteBookById: deleteBookById,
    editBookById: editBookById,
    createBook: createBook,
    fetchBooks: fetchBooks,
  }


  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  )


}

export { Provider }
export default BooksContext;

