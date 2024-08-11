import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="footer__container">
          <div className="box">
            <h3>locations</h3>
            <a href="#">Ile-Ife</a>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#about">about</a>
            <a href="#menu">menu</a>
            <a href="#">reivew</a>
            <a href="#order">order</a>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <a href="tel:+2348164223585">+2348164223585</a>
            <a href="tel:+2348137441125">+2348137441125</a>
            <a href="mailto:adeniyicushy@gmail.com">adeniyicushy@gmail.com</a>
            <a href="#">Red gate along ibadan road Ile-Ife</a>
          </div>

          <div className="box">
            <h3>follow us</h3>
            <a href="https://www.facebook.com/cushycuisine">facebook</a>
            <a href="#">twitter</a>
            <a href="#">instagram</a>
          </div>
        </div>

        <div className="credit">
          {" "}
          copyright&#9400; 2022 by <span>Cushycuisine</span>
        </div>
      </section>
    </div>
  );
}

export default Footer
