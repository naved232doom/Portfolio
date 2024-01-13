import React from "react";
import "./books.styles.scss";
import book_data from "../books/books.data";

const BooksList = () => {
  return book_data.map((item) => (
    <div className="books-collection-item" key={item.id}>
      <img alt={item.img} className="image" src={item.img}></img>
      <div className="name">{item.name}</div>
      <div className="collection-footer">{item.genre}</div>
    </div>
  ));
};

const Books = () => {
  return (
    <div className="books-collection">
      <BooksList />
    </div>
  );
};

export default Books;
