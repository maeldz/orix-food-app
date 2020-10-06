import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { ImageSourcePropType } from "react-native";
import { AppLoading } from "expo";

interface CartItem {
  id: number;
  categoryId: number;
  title: string;
  image: string;
  price: number;
  amount: number;
  backgroundColor: string;
}

interface CartContext {
  items: CartItem[];
  addToCart: (item: CartItem) => Promise<void>;
  updateCart: (id: number, amount: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => Promise<void>;
  loading: boolean;
}

const CartContext = createContext<CartContext>({} as CartContext);

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCart() {
      const storagedCart = await AsyncStorage.getItem("@orix:cart");

      if (storagedCart) {
        setCart(JSON.parse(storagedCart));
        setLoading(false);
      }
    }

    loadCart();
  }, []);

  async function addToCart(item: CartItem) {
    const productExists = cart.find((p) => p.id === item.id);
    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + 1;

    if (productExists) {
      const updatedCart = cart.map((p: CartItem) =>
        p.id === item.id ? { ...p, amount } : p
      );

      await AsyncStorage.setItem("@orix:cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    } else {
      await AsyncStorage.setItem(
        "@orix:cart",
        JSON.stringify([...cart, { ...item, amount: 1 }])
      );
      setCart([...cart, { ...item, amount: 1 }]);
    }
  }

  async function updateCart(id: number, amount: number) {
    if (amount <= 0) return;
    const productExists = cart.find((p) => p.id === id);

    if (productExists) {
      const updatedCart = cart.map((p: CartItem) =>
        p.id === id ? { ...p, amount } : p
      );

      await AsyncStorage.setItem("@orix:cart", JSON.stringify(updatedCart));

      setCart(updatedCart);
    }
  }

  function removeFromCart(id: number) {
    const updatedCart = cart.filter((p) => p.id !== id);
    setCart(updatedCart);
  }

  async function clearCart() {
    await AsyncStorage.removeItem("@orix:cart");
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        items: cart,
        addToCart,
        updateCart,
        removeFromCart,
        clearCart,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
