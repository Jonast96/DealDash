import { CartContext } from "../../components/Cart";
import React, { useContext } from "react";
import "../../styles/cart/cart.scss";
import Summary from "./summary";

export default function CartWithItems() {
  const { cart } = useContext(CartContext);

  console.log(cart);

  return (
    <main className="main-content cart">
      <h1>My cart</h1>
      <div className="cartContainer">
        <div className="items">
          {cart.map((item) => {
            return (
              <div key={item.id} className="item">
                <div className="imgContainer">
                  <img src={item.imageUrl} alt={item.imageUrl} />
                </div>
                <div className="titleId">
                  <p className="title">{item.title}</p>
                  <p className="id">{item.id}</p>
                </div>
                <div className="addRemoveButtons">
                  <button className="button">-</button>
                  <p>0</p>
                  <button className="button">+</button>
                </div>
                <div>
                  <p>{item.price}</p>
                </div>
                <div>
                  <button className="button">X</button>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <Summary
            title={"Your cart"}
            cart={cart}
            buttonName="Checkout"
            linkTo={"/checkout"}
          />
        </div>
      </div>
    </main>
  );
}
