import React from "react";
import { Route, NavLink } from "react-router-dom";

import Link from "./Link";

import ItemDescription from "./ItemDescription";
import ItemShipping from "./ItemShipping";
function Item(props) {
  const item = props.items.find(product => {
    return product.id === Number(props.match.params.id);
  });

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>
      <nav className="item-sub-nav">
        <Link to={`/item-list/${item.id}/description`}>Desc</Link>
        <Link to={`/item-list/${item.id}/shipping`}>Shipping</Link>
      </nav>
      <Route
        path="/item-list/:id/description"
        render={() => {
          return <ItemDescription item={item} />;
        }}
      />
      <Route
        path="/item-list/:id/shipping"
        render={() => {
          return <ItemShipping item={item} />;
        }}
      />
    </div>
  );
}

export default Item;
