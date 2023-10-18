import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [selectedCategory, setSelectedCategory] = useState(false);

  function handleClick() {
    setSelectedCategory((selectedCategory) => !selectedCategory);
  }

  return (
    <li className={selectedCategory ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={selectedCategory ? "remove" : "add"}
        onClick={handleClick}
      >
        {selectedCategory ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
