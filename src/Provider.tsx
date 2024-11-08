import { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const Provider = ({ children }: { children: ReactNode }) => {
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
};
