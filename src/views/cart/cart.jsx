import { CartContext } from "../../components/Cart";
import React, { useContext } from "react";
import "../../styles/cart/cart.scss";
import CartWithItems from "./cartWithItems";
import EmptyCart from "./emptyCart";
export default function Cart() {
  const { cart, clearCart } = useContext(CartContext);

  return <>{cart.length === 0 ? <EmptyCart /> : <CartWithItems />}</>;
}
