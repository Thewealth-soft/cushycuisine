import React from 'react';
import './Menu.css';
import MenuDatas from './MenuData'; 
import MenuItem from './MenuItem'; 
function Menu() {
  return (
    <section id="menu">
      <div className="menu__container">
        <div className="menu__title">
          <h3 className="heading">Our Menu</h3>
          <h2 className="sub__heading">Sweetness with all the Extras</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, molestias.</p>
          <a href="#" className="btn menu__btn">View More</a>
        </div>

        <div className="food__container">
          {MenuDatas.map((food) => (
            <MenuItem key={food.id} item={food} /> 
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
