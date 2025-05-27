import { Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Button({
  title,
  buttonStyle = styles.btnYellow,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.btnYellow}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.textDark}>{title}</Text>
    </TouchableOpacity>
  );
}
