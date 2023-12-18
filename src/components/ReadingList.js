import { BookAddForm } from './BookAddForm';
import { Book } from './Book';

export function ReadingList({
  books,
  onAddBooks,
  deleteBook,
  onToggleBook,
  addBook,
  onAddToggle,
}) {
  return (
    <div className="container">
      <button className="btn btn-primary mb-4" onClick={onAddToggle}>
        {!addBook ? 'Add a Book' : 'close'}
      </button>
      {addBook && <BookAddForm onAddBooks={onAddBooks} />}
      <ul className="list-group mb-4">
        {books.map((book) => (
          <Book
            deleteBook={deleteBook}
            onToggleBook={onToggleBook}
            book={book}
            key={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
    </div>
  );
}
