import React from "react";
import Cards, { Card } from "./Cards";
const Container = () => {
  return (
    <div className="containerr">
      <div className="list-item">
        <div>
          <p>Filter</p>

          <p className="plus">CLEAR ALL</p>
        </div>
        <div>
          <p>Type of Plants</p>
          <p className="plus">+</p>
        </div>
        <div>
          <p>Price</p>
          <p className="plus">+</p>
        </div>
        <div>
          <p>Nursery</p>
          <p className="plus">+</p>
        </div>
        <div>
          <p>Ideal Plant Location</p>
          <p className="plus">+</p>
        </div>
        <div>
          <p>Indoor/Outdoor</p>
          <p className="plus">+</p>
        </div>
        <div>
          <p>Maintainence</p>
          <p className="plus">+</p>
        </div>
        <div>
          <p>Plant Size</p>
          <p className="plus">+</p>
        </div>
        <div>
          <p>Water Schedule</p>
          <p className="plus">+</p>
        </div>
        <div>
          <p>Color</p>
          <p className="plus">+</p>
        </div>
        <div>
          <p>Light Efficient</p>
          <p className="plus">+</p>
        </div>
      </div>

      <div className="cardItem">
        <div className="CardBtn">
          <button className="btn-card1">300 products</button>
          <button className="btn-card2">
            SORT BY <select className="select"></select>
          </button>
        </div>
        <div className="cards">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>

      <div className="view-button">
        <button>View more</button>
      </div>
    </div>
  );
};

export default Container;
