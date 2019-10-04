import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  console.log(props);
  const routeToShop = event => {
    event.preventDefault();
    setTimeout(() => props.history.push("/item-list"), 5000);
  };
  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://www.uncommongoods.com/images/category/fun-fullwidth.jpg"
        alt=""
      />
      <button className="md-button shop-button" onClick={routeToShop}>
        Shop now!
      </button>
    </div>
  );
}

export default Home;
