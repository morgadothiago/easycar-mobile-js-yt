import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderBackButton } from "@react-navigation/elements";

import Home from "../../screens/Home/home";

import DriverScreen from "../../screens/drive";
import PassengerScreen from "../../screens/passenger";

const Stack = createNativeStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator options>
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
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: "#000", // Cor de fundo desejada
                borderRadius: 100,
              }}
              tintColor="#FFFFFF" // Cor do ícone de voltar
            />
          ),
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
