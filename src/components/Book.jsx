import React from "react";

export default function Book(props) {
  let { header, title, id, author, imageLink, handleClick } = props;

  return (
    <div>
      <img src={imageLink} alt="book" />
      <h1>title : {title}</h1>
      <h1>author: {author}</h1>
      {header === "continue reading" ? (
        <div>
          <button value="read" onClick={() => handleClick(id, "read")}>
            move to read
          </button>
          -
          <button value="wishlist" onClick={() => handleClick(id, "wishlist")}>
            move to wishilist
          </button>
          <br />
          <br />
        </div>
      ) : (
        ""
      )}
      {header === "read" ? (
        <div>
          <button
            value="continue reading"
            onClick={() => handleClick(id, "continue reading")}
          >
            move to continue reading
          </button>
          -
          <button value="wishlist" onClick={() => handleClick(id, "wishlist")}>
            move to wishilist
          </button>
          <br />
          <br />
        </div>
      ) : (
        ""
      )}
      {header === "wishlist" ? (
        <div>
          <button value="read" onClick={() => handleClick(id, "read")}>
            move to read
          </button>
          -
          <button
            value="continue reading"
            onClick={() => handleClick(id, "continue reading")}
          >
            move to continue reading
          </button>
          <br />
          <br />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
