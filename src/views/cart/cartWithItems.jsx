import { CartContext } from "../../components/Cart";
import React, { useContext } from "react";
import "../../styles/cart/cart.scss";
import Summary from "./summary";
import DisplaySalePriceIfOnSale from "../../components/DisplaySalePriceIfOnSale";

/**
 * CartWithItems component that displays a list of items in the cart
 * @returns {JSX.Element} CartWithItems component
 */
export default function CartWithItems() {
  /**
   * Cart context object for accessing and modifying cart items
   * @type {object}
   */
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

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
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="button"
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="button"
                  >
                    +
                  </button>
                </div>
                <DisplaySalePriceIfOnSale
                  normalPrice={item.price * item.quantity}
                  salePrice={item.discountedPrice * item.quantity}
                />
                <div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="button"
                  >
                    X
                  </button>
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
