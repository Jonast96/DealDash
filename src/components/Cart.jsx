import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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

  const clearCart = () => {
    setCart([]);
  };
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

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
