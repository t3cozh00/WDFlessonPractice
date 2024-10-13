import React from "react";
import { useState } from "react";

export default function Ex82AddBooks() {
  const [books, setBooks] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  function inputBook(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  function addBook() {
    const updatedBooks = [...books]; // Create a copy of the books array
    updatedBooks.push(input); // Use push to add the new book
    setBooks(updatedBooks); // Update the state with the new array
    setInput("");
  }

  return (
    <div>
      <h2>Ex82AddBooks</h2>
      <input
        type="text"
        placeholder="Add your favourite book "
        value={input}
        onChange={inputBook}
      />
      <button onClick={addBook}>Add My Favourite Book</button>
      <p>
        Lists of books:
        {books.map((book) => (
          <li>{book}</li>
        ))}
      </p>
    </div>
  );
}
