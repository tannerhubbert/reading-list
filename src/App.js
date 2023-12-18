import { useState } from 'react';

// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { ReadingList } from './components/ReadingList';
import { Book } from './components/Book';
import { BookAddForm } from './components/BookAddForm';

export default function App() {
  const readingList = [
    {
      id: 1,
      title: 'ex. Rusty Bedsprings',
      author: 'U. P. Nightly',
    },
    {
      id: 2,
      title: 'ex. Willie Makeit',
      author: 'Betty Wont',
    },
  ];

  const [books, setBooks] = useState(readingList);
  const [addBook, setAddBook] = useState(false);

  function handleAddBooks(book) {
    setBooks((books) => [...books, book]);
  }

  function handleDeleteBook(id) {
    setBooks((book) => book.filter((book) => book.id !== id));
  }

  function handleAddToggle() {
    if (addBook === false) {
      setAddBook(true);
    }

    if (addBook === true) {
      setAddBook(false);
    }
  }

  function handleToggleBook(id) {
    setBooks((books) =>
      books.map((book) =>
        book.id === id ? { ...book, read: !book.read } : book
      )
    );
  }

  return (
    <div className="App">
      <h1 className="header pb-4 pt-4 text-center text-uppercase">
        Reading List
      </h1>
      <ReadingList
        books={books}
        onToggleBook={handleToggleBook}
        onAddBooks={handleAddBooks}
        deleteBook={handleDeleteBook}
        onAddToggle={handleAddToggle}
        addBook={addBook}
      />
    </div>
  );
}
