import React from "react";
import "./Header.css";
import foodie2 from ".././assets/images/foodie2.JPG";

function Header() {
  return (
    <section className="header__container">
      <div className="content">
        <div className="content__textarea">
          <h1>Your favorite food delivered Hot & fresh</h1>
          <p>
            Healthy switter chef do all the prep work, like peeling, chopping
            nariating, so you can cook a fresh food.
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
