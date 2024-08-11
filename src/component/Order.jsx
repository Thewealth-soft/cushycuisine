import React from "react";
import "./Order.css";
const Order = () => {
  return (
    <div>
      <section className="order order__container" id="order">
        <h1 className="heading"> fast delivery</h1>
        <h3 className="sub__heading"> order now </h3>

        <form action="https://formspree.io/f/xqkozdrl" method="POST">
          <div className="inputBox">
            <div className="input">
              <label>your name</label>
              <input
                type="text"
                name="Name"
                placeholder="enter your name"
              ></input>
            </div>
            <div className="input">
              <label>your number</label>
              <input
                type="number"
                name="phone number"
                placeholder="enter your number"
              ></input>
            </div>
          </div>

          <div className="inputBox">
            <div className="input">
              <label>your order</label>
              <input
                list="food"
                name="food"
                placeholder="enter food name"
              ></input>
              <datalist id="food">
                <option value="Jollof Rice"></option>
                <option value=" Fried Rice"></option>
                <option value="Pounded Yam"></option>
                <option value="Efo riro soup"></option>
                <option value="Rice"></option>
              </datalist>
            </div>
            <div className="input">
              <label>additional food</label>
              <input
                list="food"
                name="food"
                placeholder="extra with food"
                required
              ></input>
              <datalist id="food">
                <option value="Jollof Rice"></option>
                <option value=" Fried Rice"></option>
                <option value="Pounded Yam"></option>
                <option value="Efo riro soup"></option>
                <option value="Rice"></option>
              </datalist>
            </div>
          </div>

          <div className="inputBox">
            <div className="input">
              <label>how much</label>
              <input
                type="number"
                name="Number of Order"
                placeholder="how many orders"
                required
              ></input>
            </div>
            <div className="input">
              <label>date and time</label>
              <input type="datetime-local" name="Date" required></input>
            </div>
          </div>

          <div className="inputBox">
            <div className="input">
              <label>your message</label>
              <textarea
                name="Message"
                placeholder="enter your message"
                id=""
                cols="20"
                rows="10"
              ></textarea>
            </div>
            <div className="input">
              <label>your address</label>
              <textarea
                name="Adress"
                placeholder="enter your address"
                id=""
                cols="20"
                rows="10"
                required
              ></textarea>
            </div>
          </div>

          <input type="submit" value="order now" className="btn"></input>
        </form>
      </section>
    </div>
  );
};

export default Order;
