import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../pages/LoginScreen/LoginScreen";

const Stack = createNativeStackNavigator();
export const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
