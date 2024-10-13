interface Ex8101BookListProps {
  books: string[];
}

export default function Ex8101BookList({ books }: Ex8101BookListProps) {
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
