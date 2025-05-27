import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Button({
  title,
  buttonStyle = styles.btnYellow,
  onPress,
}) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ height: 50, backgroundColor: "#FFD700" }}>
      <TouchableOpacity
        style={buttonStyle}
        activeOpacity={0.7}
        onPress={onPress}
      >
        <Text style={styles.textDark}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
