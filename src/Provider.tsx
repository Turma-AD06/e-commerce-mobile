import { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CartProvider } from "./contexts/CartContext";

export const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaProvider>
      <CartProvider>{children}</CartProvider>
    </SafeAreaProvider>
  );
};
