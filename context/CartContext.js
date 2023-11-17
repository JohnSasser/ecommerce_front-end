import { createContext, useState } from 'react';

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function addProduct(product_ID) {
    setCartProducts(prev => [...prev, product_ID]);
  }

  function removeProduct(productID) {
    setCartProducts(prev => {
      const idx = prev.indexOf(productID);
      console.log('idx: ', idx);

      if (idx !== -1) {
        return prev.filter((value, index) => index !== idx);
      }
      return prev;
    });
  }

  return (
    <CartContext.Provider
      value={{ cartProducts, setCartProducts, addProduct, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  );
}
