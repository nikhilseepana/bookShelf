import React from "react";
import Book from "./Book.jsx";

export default function ShowBooks(props) {
  let { header, books, handleClick } = props;
  return (
    <div>
      <h1>{header}</h1>
      <hr />
      {books.map(book =>
        book.status === header ? (
          <Book
            key={book.id}
            header={header}
            id={book.id}
            title={book.title}
            author={book.author}
            imageLink={book.link}
            handleClick={handleClick}
          />
        ) : null
      )}
    </div>
  );
}
