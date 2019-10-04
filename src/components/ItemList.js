import React from "react";

import { Link } from "react-router-dom";

function ItemsList(props) {
  console.log("IN THE ITEMSLIST COMPONENT", props);
  return (
    <div className="items-list-wrapper">
      {props.items.map(item => (
        <div className="item-card" key={item.id}>
          <Link to={`/item-list/${item.id}`}>
            <img
              className="item-list-image"
              src={item.imageUrl}
              alt={item.name}
            />

            <p>{item.name}</p>
            <p>${item.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;
