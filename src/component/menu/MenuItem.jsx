
import React from "react";

function MenuItem({ item }) {
  return (
    <div className="card">
      <img className="menu__food-image" src={item.image} alt={item.name} />
      <div className="about__food">
        <div className="food__stripe">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <div className="food__price">{item.price}</div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
