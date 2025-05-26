import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../screens/Home/home";
import Passenger from "../../screens/passenger";

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
      <Stack.Screen name="Passenger" component={Passenger} />
    </Stack.Navigator>
  );
}
