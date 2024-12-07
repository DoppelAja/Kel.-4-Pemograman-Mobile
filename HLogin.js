import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

const HLogin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nim, setNim] = useState("");

  const handleLogin = async () => {
    try {
      if (!nim) {
        Alert.alert("Login Gagal", "NIM harus diisi.");
        return;
      }

      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Login Berhasil", "Anda sekarang masuk.");
      if (nim.startsWith("09")) {
        navigation.navigate("Dashboard Mahasiswa");
      } else {
        navigation.navigate("Dashboard Dosen");
      }
    } catch (error) {
      Alert.alert("Login Gagal", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("./assets/Dashboard.png")} style={styles.logo} />
      </View>
      <Text style={styles.title}>Bimbingan TA</Text>
      <Text style={styles.subtitle}>Login</Text>

      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="NIM/NIP" value={nim} onChangeText={setNim} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("HRegistrasi")}>
        <Text style={styles.link}>Belum punya akun? Registrasi</Text>
      </TouchableOpacity>
      <Image source={require("./assets/Lingkaran.png")} style={styles.stickyCircle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    paddingTop: -100,
    backgroundColor: "#fff",
  },
  logoContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#3470A2",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3470A2",
    marginTop: 10,
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#3470A2",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  link: {
    color: "#3470A2",
    marginTop: 10,
    textAlign: "center",
  },
  stickyCircle: {
    position: "absolute",
    bottom: -50,
    right: -50,
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
});

export default HLogin;
