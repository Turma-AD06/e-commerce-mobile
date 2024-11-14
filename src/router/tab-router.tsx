import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../pages/HomeScreen/HomeScreen";
import { theme } from "../themes/root";
import { FontAwesome6 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";

const Tab = createBottomTabNavigator();

export const TabRouter = ({ navigation }: NativeStackScreenProps<any>) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: theme.colors.gray[300],
        tabBarActiveTintColor: theme.colors.blue[600],
        headerTitle: () => null,
        headerRight: () => (
          <TouchableOpacity
            style={{
              marginRight: 12,
            }}
            onPress={() => navigation.navigate("Cart")}
          >
            <FontAwesome6
              name="cart-shopping"
              color={theme.colors.gray[300]}
              size={25}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="house" color={color} size={size} />
          ),
          title: "Início",
        }}
      />
      <Tab.Screen
        name="Conta"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="user-large" color={color} size={size} />
          ),
          title: "Conta",
        }}
      />
    </Tab.Navigator>
  );
};
