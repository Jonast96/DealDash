/**
 * @module CartContext
 */

import React, { createContext, useState } from "react";

/**
 * Context object that provides the cart state and functions for manipulating it.
 * @typedef {Object} CartContext
 * @property {Array} cart - The array of items currently in the cart.
 * @property {Function} addToCart - Adds an item to the cart.
 * @property {Function} clearCart - Clears all items from the cart.
 * @property {Function} removeFromCart - Removes an item from the cart.
 * @property {Function} increaseQuantity - Increases the quantity of an item in the cart.
 * @property {Function} decreaseQuantity - Decreases the quantity of an item in the cart.
 */
export const CartContext = createContext();

/**
 * Provider component that sets up the CartContext and manages the cart state.
 * @param {Object} props - The props object.
 * @param {Array} props.children - The child components of the provider.
 * @returns {JSX.Element} The provider component.
 */
export const CartProvider = ({ children }) => {
  /**
   * The state of the cart array.
   * @type {Array}
   */
  const [cart, setCart] = useState([]);

  /**
   * Adds an item to the cart or increases its quantity if it is already in the cart.
   * @param {Object} item - The item to be added to the cart.
   */
  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + 1,
      };
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  /**
   * Clears all items from the cart.
   */
  const clearCart = () => {
    setCart([]);
  };

  /**
   * Removes an item from the cart.
   * @param {number} id - The ID of the item to be removed.
   */
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  /**
   * Increases the quantity of an item in the cart.
   * @param {number} id - The ID of the item whose quantity should be increased.
   */
  const increaseQuantity = (id) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === id
    );
    updatedCart[existingItemIndex] = {
      ...updatedCart[existingItemIndex],
      quantity: updatedCart[existingItemIndex].quantity + 1,
    };
    setCart(updatedCart);
  };

  /**
   * Decreases the quantity of an item in the cart or removes it if its quantity becomes 0.
   * @param {number} id - The ID of the item whose quantity should be decreased.
   */
  const decreaseQuantity = (id) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === id
    );
    if (updatedCart[existingItemIndex].quantity === 1) {
      removeFromCart(id);
    } else {
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity - 1,
      };
      setCart(updatedCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
