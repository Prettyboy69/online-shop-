import React from "react";
import Products from "./Products";
// import bg from '../../public/assets/bg.png'

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark">
        <img src="/assets/LORD.PNG" class="card-img" alt="background" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container"></div>
          <h5 className="card-title display-3 FW-bolder-mb-0">
            New SEASON ARRIVALS
          </h5>
          <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
