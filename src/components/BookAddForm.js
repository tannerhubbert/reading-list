import { useState } from 'react';

export function BookAddForm({ books, book, onAddBooks }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!title) return;
    const newBook = { title, author, read: false, id: Date.now() };
    onAddBooks(newBook);
    setTitle('');
    setAuthor('');
    console.log(title);
  }

  return (
    <form className="form add-form" onSubmit={handleSubmit}>
      <h3>What book would you like to add?</h3>
      <div className="d-flex flex-column">
        <input
          className="text-center mb-2 rounded-1"
          type="text"
          placeholder="Book Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="text-center mb-4 rounded-1"
          type="text"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="btn btn-primary mb-4">Add</button>
      </div>
    </form>
  );
}
