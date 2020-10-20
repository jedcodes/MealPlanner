import React from "react";
import HomeCards from "./HomeCards";

const HomeContent = () => {
  return (
    <div className="homeContent">
      <div className="homeContent__header">
        <h1 className="homeContent__header--primary">Our Picks</h1>
        <h4 className="homeContent__header--secondary">
          Delicious recipes we chose for you
        </h4>
      </div>
      <div className="homeContent__cards">
        <HomeCards />
        <HomeCards />
        <HomeCards />
      </div>
    </div>
  );
};

export default HomeContent;
