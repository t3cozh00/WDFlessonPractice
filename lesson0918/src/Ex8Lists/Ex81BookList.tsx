import React from "react";

export default function Ex81BookList() {
  const bookList = [
    { name: "To Kill a Mockingbird" },
    { name: "1984" },
    { name: "Educated" },
    { name: "The Immortal Life of Henrietta Lacks" },
    { name: "The Glass Castle" },
  ];

  return (
    <div>
      <ul>
        {bookList.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
