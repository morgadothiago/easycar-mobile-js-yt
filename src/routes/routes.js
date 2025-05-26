import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./Main/MainStack";

export default function Routes() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
