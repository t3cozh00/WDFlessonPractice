interface Ex81BookListProps {
  books: string[];
}

export default function Ex81BookList({ books }: Ex81BookListProps) {
  return (
    <div>
      <ul>
        {books.map((book) => (
          <li>{book}</li>
        ))}
      </ul>
    </div>
  );
}
