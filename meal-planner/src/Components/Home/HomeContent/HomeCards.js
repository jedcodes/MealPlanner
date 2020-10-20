import React from "react";
import { BsClock } from "react-icons/bs";
import { VscThumbsup } from "react-icons/vsc";

const HomeCards = ({ isPopular }) => {
  return (
    <div className={isPopular ? "homeCards" : "homeCards-popular"}>
      <div className="homeCards__image">
        <img
          className="homeCards__img"
          src="https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
          alt=""
        />
      </div>
      <div className="homeCards__header">
        <div className="homeCards__duration">
          <p>
            <BsClock />
            <span>60 minutes</span>
          </p>
        </div>
        <div className="homeCards__skills">
          <p>
            <VscThumbsup />
            <span>Easy</span>
          </p>
        </div>
      </div>
      <div className="homeCards__title">
        <h3>Tasty croissant and tea for perfect breakfast</h3>
      </div>
    </div>
  );
};

export default HomeCards;
