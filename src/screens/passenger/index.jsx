import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Button from "../../components/Button";
import icons from "../../constants/icnons.js";
import { Ionicons } from "@expo/vector-icons";

import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";

import { styles } from "./styles";
import { useState } from "react";

export default function PassengerScreen() {
  const [myLocation, setMyLocation] = useState(null);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -23.55052,
            longitude: -46.633308,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider={PROVIDER_DEFAULT}
        >
          <Marker
            coordinate={{
              latitude: -23.55052,
              longitude: -46.633308,
            }}
            title={"Você está aqui"}
            description={"Sua localização atual"}
            pinColor={"#00ff000"}
            image={icons.location}
            style={styles.marker}
          />
        </MapView>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.footer}>
            <View style={styles.footerFields}>
              <View style={styles.footerText}>
                <Text>Encontre a sua carona</Text>
              </View>
              <Text>Origem</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Digite sua origem"
                  placeholderTextColor={"#fff"}
                />
                <Ionicons
                  name="location-outline"
                  size={24}
                  color="#F7D600"
                  style={{ position: "absolute", right: 10, top: 15 }}
                />
              </View>
            </View>

            <View style={styles.footerFields}>
              <Text>Destino</Text>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Digite seu destino"
                  placeholderTextColor={"#fff"}
                />
                <Ionicons
                  name="location-sharp"
                  size={24}
                  color="#F7D600"
                  style={{ position: "absolute", right: 10, top: 15 }}
                />
              </View>
            </View>
          </View>

          <Button title="CONFIRMA" />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
