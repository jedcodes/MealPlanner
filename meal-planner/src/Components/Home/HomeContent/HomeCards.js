import React from "react";
import { BsClock } from "react-icons/bs";
import { VscThumbsup } from "react-icons/vsc";

const HomeCards = ({ isPopular }) => {
  return (
    <div className={!isPopular ? "homeCards" : "homeCards-popular"}>
      <div
        className={!isPopular ? "homeCards__image" : "homeCards-popular__image"}
      >
        <img
          className={!isPopular ? "homeCards__img" : "homeCards-popular__img"}
          src="https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
          alt=""
        />
      </div>
      <div
        className={
          !isPopular
            ? "homeCards__description"
            : "homeCards-popular__description"
        }
      >
        <div
          className={
            !isPopular ? "homeCards__header" : "homeCards-popular__header"
          }
        >
          <div
            className={
              !isPopular ? "homeCards__duration" : "homeCards-popular__duration"
            }
          >
            <p>
              <BsClock />
              <span>60 minutes</span>
            </p>
          </div>
          <div
            className={
              !isPopular ? "homeCards__skills" : "homeCards-popular__skills"
            }
          >
            <p>
              <VscThumbsup />
              <span>Easy</span>
            </p>
          </div>
        </div>

        <div className="homeCards-popular__text">
          <div
            className={
              !isPopular ? "homeCards__title" : "homeCards-popular__title"
            }
          >
            <h3>Tasty croissant and tea for perfect breakfast</h3>
          </div>
          {isPopular && (
            <p className="homeCards-popular__text-paragraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              facilis, numquam quaerat eum nam quibusdam, officiis repellendus
              sed dolorum quae, accusantium enim eaque quis fuga esse corporis.
              Tempore, maxime minima!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
