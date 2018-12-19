import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Book from "./components/Book.jsx";
import ShowBooks from "./components/ShowBooks.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      books: [
        {
          id: 0,
          author: "Chinua Achebe",
          status: "continue reading",
          country: "Nigeria",
          imageLink: "images/things-fall-apart.jpg",
          language: "English",
          link: "https://picsum.photos/200/300?image=55",
          pages: 209,
          title: "Things Fall Apart",
          year: 1958
        },
        {
          id: 1,
          author: "Hans Christian Andersen",
          status: "continue reading",
          country: "Denmark",
          imageLink: "images/fairy-tales.jpg",
          language: "Danish",
          link: "https://picsum.photos/200/300?image=100",
          pages: 784,
          title: "Fairy tales",
          year: 1836
        },
        {
          id: 2,
          author: "Dante Alighieri",
          country: "Italy",
          status: "read",
          imageLink: "images/the-divine-comedy.jpg",
          language: "Italian",
          link: "https://picsum.photos/200/300?image=120",
          pages: 928,
          title: "The Divine Comedy",
          year: 1315
        },
        {
          id: 3,
          author: "Nikhil Seepana",
          status: "read",
          country: "Sumer and Akkadian Empire",
          imageLink: "images/the-epic-of-gilgamesh.jpg",
          language: "Akkadian",
          link: "https://picsum.photos/200/300?image=42",
          pages: 160,
          title: "The Epic Of Gilgamesh",
          year: -1700
        },
        {
          id: 4,
          author: "Amith Tiwari",
          status: "wishlist",
          country: "Achaemenid Empire",
          imageLink: "images/the-book-of-job.jpg",
          language: "Hebrew",
          link: "https://picsum.photos/200/300?image=38",
          pages: 176,
          title: "The Book Of Job",
          year: 1600
        }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = function(id, value) {
    let oldBooks = this.state.books;

    let newBooks = oldBooks.map(book => {
      return { ...book };
    });

    newBooks.find(book => book.id == id).status = value;

    console.log(newBooks);
    this.setState({ ...this.state, books: newBooks });
  };

  handleChange = function(e) {
    this.setState({ filter: e.target.value });
  };

  render() {
    let { books, filter } = this.state;
    books = books.filter(book => book.title.includes(filter));
    return (
      <div className="App">
        <input
          type="text"
          placeholder="search a book"
          value={this.state.filter}
          onChange={this.handleChange}
        />
        <hr />
        <ShowBooks
          header="continue reading"
          books={books}
          handleClick={this.handleClick}
        />
        <hr />
        <ShowBooks header="read" books={books} handleClick={this.handleClick} />
        <hr />
        <ShowBooks
          header="wishlist"
          books={books}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
