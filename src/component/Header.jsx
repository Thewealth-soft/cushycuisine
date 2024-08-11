import React from "react";
import "./Header.css";
import foodie2 from ".././assets/images/foodie2.JPG";

function Header() {
  return (
    <section className="header__container">
      <div className="content">
        <div className="content__textarea">
          <h1>Your home of sweetness<h1 className="inner__text">delivered Hot & fresh</h1> </h1>
          <p>
           We are the food plug of the people, a fast food and restaurant that delivers ready-made healthy food. 
          </p>
          <a href="#order" className="btn">
            Order Now
          </a>
        </div>
      </div>
      <div className="tray">
        <img
          className="small_device-image"
          src={foodie2}
          alt="food image"
        />
      </div>
      <div className="plate">
        <div className="food">
          <img
            className="header__food-image"
            src={foodie2}
            alt="food image"
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
