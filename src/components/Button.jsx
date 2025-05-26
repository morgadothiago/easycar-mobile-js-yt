import { Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./ButtonStyles";

export default function Button({ icon, title, subTitle, onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <Image source={icon} style={styles.img} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </TouchableOpacity>
  );
}
