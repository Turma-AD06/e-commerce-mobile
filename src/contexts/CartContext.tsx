import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { ProductModel } from "../services/product.service";

interface ProductCartModel extends ProductModel {
  amount: number;
}

interface CartContextData {
  cart: ProductCartModel[];
  totalCart: number;
  addProduct: (product: ProductModel) => void;
  removeProduct: (productId: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ProductCartModel[]>([]);

  const addProduct = (product: ProductModel) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);
    if (productIndex === -1) {
      setCart([...cart, { ...product, amount: 1 }]);
      return;
    }
    const newCart = cart.map((item) =>
      item.id === product.id ? { ...item, amount: item.amount + 1 } : item
    );
    setCart(newCart);
  };

  const removeProduct = (productId: number) => {
    const newCart = cart.filter((item) => item.id !== productId);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalCart = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.amount, 0);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, totalCart, addProduct, removeProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
