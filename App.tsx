import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Provider } from "./src/Provider";
import { Router } from "./src/router";

export default function App() {
  return (
    <NavigationContainer>
      <Provider>
        <Router />
      </Provider>
      <StatusBar barStyle="dark-content" />
    </NavigationContainer>
  );
}
