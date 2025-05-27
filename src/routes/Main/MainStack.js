import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../screens/Home/home";

import DriverScreen from "../../screens/drive";
import PassengerScreen from "../../screens/passenger";

const Stack = createNativeStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Passenger"
        component={PassengerScreen}
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Driver"
        component={DriverScreen}
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
