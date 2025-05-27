import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import icons from "../../constants/icnons.js";
import { styles } from "./styles.js";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  function handlePessenger() {
    navigation.navigate("Passenger");
  }
  function handleDriver() {
    navigation.navigate("Driver");
  }

  return (
    <ImageBackground
      source={icons.bg}
      resizeMode="cover"
      style={styles.ImageBackGround}
    >
      <Image source={icons.logo} style={styles.logo} />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.9}
        onPress={handlePessenger}
      >
        <Image source={icons.passenger} style={styles.img} />
        <Text style={styles.title}>Passageiro</Text>
        <Text style={styles.subTitle}>Encontre uma carrona para voce</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.9}
        onPress={handleDriver}
      >
        <Image source={icons.driver} style={styles.img} />
        <Text style={styles.title}>Motorista</Text>
        <Text style={styles.subTitle}>Encontre uma carrona para voce</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
