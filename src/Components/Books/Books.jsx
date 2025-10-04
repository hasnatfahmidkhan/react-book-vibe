import React from "react";
import BookCard from "../BookCard/BookCard";

const Books = ({ booksData }) => {
  return (
    <section className="md:py-20">
      <div className="py-10">
        <h2 className="text-center text-6xl font-semibold">Books</h2>
      </div>
      <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-6">
        {booksData.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
