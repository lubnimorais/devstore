'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

interface ICartItem {
  productId: number;
  quantity: number;
}

interface ICartContextType {
  items: ICartItem[];
  addToCart: (productId: number) => void;
}

const CartContext = createContext({} as ICartContextType);

interface ICartProviderProds {
  children: ReactNode;
}

export function CartProvider({ children }: ICartProviderProds) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  function addToCart(productId: number) {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.productId === productId);

      if (productInCart) {
        return state.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity + 1 };
          }

          return item;
        });
      } else {
        return [...state, { productId, quantity: 1 }];
      }
    });
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}
