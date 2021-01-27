import React from "react";

import "../books/books.styles.scss";
import book_data from "../books/books.data";

const Books = () => {
  return book_data.map((item) => (
    <div class="col-md-4 col-sm-6" key={item.id}>
      <div className="collection-item">
        <img className="image" src={item.img}></img>
        <div className="name">{item.name}</div>
        <div className="collection-footer">
         {item.genre}
        </div>
      </div>
    </div>
  ));
};

export default Books;
