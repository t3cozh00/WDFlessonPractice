interface Ex81BookListProps {
  books: string[];
}

export default function Ex81BookList({ books }: Ex81BookListProps) {
  return (
    <div>
      <h2>Ex81BookList</h2>
      <ul>
        {books.map((book, i) => (
          <li key={i}>{book}</li>
        ))}
      </ul>
    </div>
  );
}
