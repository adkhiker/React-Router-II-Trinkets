import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import ItemList from "./components/ItemList";
import Item from "./components/Item";

import products from "./data";

import "./styles.css";

const App = () => {
  const [items, setItems] = useState(products);
  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Greg's Trinkets</h1>
        <div className="nav-links">
          <Link to="/item-list">Shop Now</Link>
          <Link to="/">Home</Link>
        </div>
      </nav>
      <Route exact path="/" component={Home} />
      <Route
        path="/item-list"
        render={props => {
          return <ItemList items={items} {...props} />;
        }}
        exact
      />
      <Route
        path="/item-list/:id"
        render={props => <Item items={items} {...props} />}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
