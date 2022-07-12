import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Animated,
} from "react-native";

export default function Menu() {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  Animated.parallel([
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 20,
      useNativeDriver: true,
    }),
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }),
  ]).start();

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
        <Animated.Image source={require("../../assets/favicon.png")} />
      </View>

      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [{ translateY: offset.y }],
          },
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TouchableOpacity style={styles.btnAcessar}>
          <Text style={styles.textAcessar}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnRegistrar}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={styles.textRegistrar}>Cadastrar</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    width: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingBottom: 50,
  },
  text: {
    color: "#fff",
  },
  input: {
    backgroundColor: "#fff",
    width: "90%",
    marginBottom: 15,
    color: "#222",
    fontSize: 17,
    borderRadius: 7,
    padding: 12,
  },
  btnAcessar: {
    backgroundColor: "green",
    width: "40%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  textAcessar: {
    color: "#FFF",
    fontSize: 18,
  },
  btnRegistrar: {
    marginTop: 15,
    backgroundColor: "#000",
    width: "30%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  textRegistrar: {
    color: "#FFF",
  },
});
