"use client";
import React, { createContext, useContext, useState } from "react";
import { type Cart } from "@/api/types";

export const useCartState = () =>
  useState<Cart>({
    products: [],
  });

export const CartContext = createContext<ReturnType<
  typeof useCartState
> | null>(null);

export const useCart = () => {
  const cart = useContext(CartContext);

  if (!cart) {
    throw new Error("useCard must be used in a cart provider");
  }

  return cart;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useCartState();
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};
