export function Book({ book, deleteBook, onToggleBook }) {
  return (
    <li className="list-group-item">
      <input
        type="checkbox"
        value={book.read}
        onChange={() => onToggleBook(book.id)}
      />
      <span style={book.read ? { textDecoration: 'line-through' } : {}}>
        <h3>{book.title}</h3>
      </span>
      <p>{book.author}</p>
      <button
        className="btn btn-danger mb-2"
        onClick={() => deleteBook(book.id)}>
        remove book
      </button>
    </li>
  );
}
