import { SafeAreaView, Text, View } from "react-native";
import Button from "../../components/Button";
import { styles } from "../../components/Button/styles";
import { useRoute } from "@react-navigation/native";

export default function DriveScreen() {
  const route = useRoute();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text>Tela, {route.name}</Text>
      <Button
        title="Confirma"
        buttonStyle={styles.btnYellow}
        onPress={() => {}}
      />
    </SafeAreaView>
  );
}
