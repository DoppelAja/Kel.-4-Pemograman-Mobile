import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const DashboardAwal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("./assets/Dashboard.png")} style={styles.logo} />
      </View>

      <Text style={styles.title}>Bimbingan TA</Text>
      <Text style={styles.subtitle}>Masuk sebagai?</Text>

      <TouchableOpacity style={styles.buttonMhs} onPress={() => navigation.navigate("Dashboard Mahasiswa")}>
        <Text style={styles.buttonTextMhs}>Mahasiswa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonDsn} onPress={() => navigation.navigate("Dashboard Dosen")}>
        <Text style={styles.buttonTextDsn}>Dosen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#3470A2",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3470A2",
    marginTop: 10,
    marginBottom: 15,
  },
  buttonMhs: {
    backgroundColor: "#3470A2",
    padding: 20,
    paddingHorizontal: 100,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  buttonDsn: {
    borderColor: "#3470A2",
    borderWidth: 2,
    padding: 20,
    paddingHorizontal: 115,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonTextMhs: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  buttonTextDsn: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3470A2",
  },
});

export default DashboardAwal;
