import React from "react";
import { useState } from "react";

export default function Ex83FilterList() {
  const [books, setBooks] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const [filterString, setFilterString] = useState<string>("");

  function inputBook(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  function addBook() {
    const updatedBooks = [...books]; // Create a copy of the books array
    updatedBooks.push(input); // Use push to add the new book
    setBooks(updatedBooks); // Update the state with the new array
    setInput("");
  }

  function filerBookHandler(event) {
    console.log("event.target.value", event.target.value);
    setFilterString(event.target.value);
  }

  return (
    <div>
      <h2>Ex83FilterList</h2>
      <input
        type="text"
        placeholder="Add your favourite book "
        value={input}
        onChange={inputBook}
      />
      <button onClick={addBook}>Add My Favourite Book</button>
      <div>
        Filter books: <input type="text" onChange={filerBookHandler} />
      </div>
      <p>
        Lists of books:
        {books
          .filter((book) => book.includes(filterString))
          .map((book) => (
            <li>{book}</li>
          ))}
      </p>
    </div>
  );
}
