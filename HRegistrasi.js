import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { Picker } from "@react-native-picker/picker";
import { collection, addDoc } from "firebase/firestore";

const HRegistrasi = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nim, setNim] = useState("");
  const [jurusan, setJurusan] = useState("");

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await addDoc(collection(db, "users"), {
        uid: user.uid,
        email: user.email,
        nim: nim,
        jurusan: jurusan,
      });

      Alert.alert("Registrasi Berhasil", "Anda sekarang dapat login.");
      navigation.navigate("HLogin");
    } catch (error) {
      Alert.alert("Registrasi Gagal", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("./assets/Dashboard.png")} style={styles.logo} />
      </View>
      <Text style={styles.title}>Bimbingan TA</Text>
      <Text style={styles.subtitle}>Registrasi</Text>

      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="NIM/NIP" value={nim} onChangeText={setNim} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Picker selectedValue={jurusan} onValueChange={(itemValue) => setJurusan(itemValue)} style={[styles.input, styles.picker]}>
        <Picker.Item label="Pilih Jurusan" value="" />
        <Picker.Item label="Sistem Informasi" value="Sistem Informasi" />
        <Picker.Item label="Sistem Komputer" value="Sistem Komputer" />
        <Picker.Item label="Teknik Informatika" value="Teknik Informatika" />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("HLogin")}>
        <Text style={styles.link}>Sudah punya akun? Login</Text>
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
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#3470A2",
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
  picker: {
    height: 50,
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

export default HRegistrasi;
