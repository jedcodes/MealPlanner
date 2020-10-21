import React from "react";
import HomeCards from "./HomeCards";

const CardRows = ({ isPopular }) => {
  return (
    <div className="cardRows">
      <HomeCards />
      <HomeCards />
      <HomeCards />
      <HomeCards isPopular />
    </div>
  );
};

export default CardRows;
