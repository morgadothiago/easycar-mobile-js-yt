import { StatusBar } from "react-native";

import Routes from "./src/routes/routes.js";

export default function App() {
  return (
    <>
      <StatusBar barStyle={"light-content"} translucent />
      <Routes />
    </>
  );
}
