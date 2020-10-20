import React from "react";
import { Banner, HomeContent } from "../../Components";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <h1 className="home__header--primary">Our Picks</h1>
        <h4 className="home__header--secondary">
          Delicious recipes we chose for you
        </h4>
      </div>
      <Banner />
      <HomeContent />
    </div>
  );
};

export default Home;
