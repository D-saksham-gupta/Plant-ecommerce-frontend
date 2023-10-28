import React from "react";

function Cards() {
  return (
    <div className="card-plants">
      <img
        src="https://th.bing.com/th/id/OIP.m9LUv5qauKKDjPo4oyadCAHaHa?pid=ImgDet&w=700&h=700&rs=1"
        alt=""
      />
      <p className="view">View Product</p>
      <h4>Monsterra</h4>
      <p className="indoor">Indoor plant, low maintainence</p>
      <div className="star">
        <img
          src="https://img.freepik.com/free-vector/start_53876-25533.jpg?size=626&ext=jpg"
          alt=""
        />
        <img
          src="https://img.freepik.com/free-vector/start_53876-25533.jpg?size=626&ext=jpg"
          alt=""
        />
        <img
          src="https://img.freepik.com/free-vector/start_53876-25533.jpg?size=626&ext=jpg"
          alt=""
        />
        <img
          src="https://img.freepik.com/free-vector/start_53876-25533.jpg?size=626&ext=jpg"
          alt=""
        />
        <img
          src="https://img.freepik.com/free-vector/start_53876-25533.jpg?size=626&ext=jpg"
          alt=""
        />
        <p>5.0</p>
      </div>
      <div className="rupee">
        <p>
          <del className="p1">₹ 359</del>
        </p>
        <p className="p2">₹ 299</p>
      </div>
      <button className="btn-c">- Add to cart +</button>
      <button className="btn-b">Buy on Rent</button>
    </div>
  );
}

export default Cards;
