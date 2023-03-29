import { CartContext } from "../../components/Cart";
import React, { useContext } from "react";
import "../../styles/cart/cart.scss";
import CartWithItems from "./cartWithItems";
import EmptyCart from "./emptyCart";

/**
 * Cart component that conditionally renders either an empty cart or a cart with items
 * @returns {JSX.Element} Cart component
 */
export default function Cart() {
  /**
   * Cart context object for accessing cart items
   * @type {object}
   */
  const { cart } = useContext(CartContext);

  /**
   * Conditionally render the EmptyCart component if the cart is empty,
   * otherwise render the CartWithItems component
   */
  return <>{cart.length === 0 ? <EmptyCart /> : <CartWithItems />}</>;
}
