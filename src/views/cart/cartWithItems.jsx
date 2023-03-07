import { CartContext } from "../../components/Cart";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/cart/cart.scss";

export default function CartWithItems() {
  const { cart } = useContext(CartContext);

  function calculateTotal(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price;
    }
    return total.toFixed(2);
  }

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

        <div className="summary">
          <h2>Your order</h2>
          <div className="subtotalContainer">
            <div className="subtotal">
              <p>Subtotal:</p>
              <p>{calculateTotal(cart)},-</p>
            </div>
            <div className="shipping">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
          </div>
          <div className="totalContainer">
            <p className="total">Total:</p>
            <p>{calculateTotal(cart)},-</p>
          </div>
          <Link to={"/checkout"}>
            <button className="checkoutButton">Go to checkout</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
