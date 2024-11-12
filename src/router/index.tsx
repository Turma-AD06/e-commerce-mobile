import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../pages/LoginScreen/LoginScreen";
import { RegisterScreen } from "../pages/RegisterScreen/RegisterScreen";

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
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
