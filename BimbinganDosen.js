import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BimbinganDosen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <ImageBackground source={require("./assets/BackgroundCard.png")} style={styles.backgroundCard} imageStyle={styles.backgroundImage}>
          <Image source={require("./assets/Joko.png")} style={styles.profilePicture} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Nama: Joko, S.Kom., M.T.</Text>
            <Text style={styles.profileNim}>NIP: 108420753221</Text>
            <Text style={styles.profileDosenPembimbing1}>Bimbingan Saat Ini:</Text>
            <Text style={styles.profileJoko}>13</Text>
            <Text style={styles.profileDosenPembimbing2}>Bimbingan Selesai:</Text>
            <Text style={styles.profileClara}>128</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Janji Temu Dosen")}>
          <Text style={styles.buttonText}>Janji Temu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Review Dosen")}>
          <Text style={styles.buttonText}>Review</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Riwayat Dosen")}>
          <Text style={styles.buttonText}>Riwayat</Text>
        </TouchableOpacity>
      </View>
      <Image source={require("./assets/Lingkaran.png")} style={styles.stickyCircle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileContainer: {
    margin: 30,
    marginTop: 25,
    borderRadius: 25,
    overflow: "hidden",
    shadowColor: "black",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  backgroundCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  backgroundImage: {
    borderRadius: 25,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  profileNim: {
    fontSize: 14,
    color: "#fff",
  },
  profileDosenPembimbing1: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  profileJoko: {
    fontSize: 14,
    color: "#fff",
  },
  profileDosenPembimbing2: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  profileClara: {
    fontSize: 14,
    color: "#fff",
  },
  buttonContainer: {
    padding: 5,
  },
  button: {
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 0,
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 70,
    marginBottom: 20,
    shadowColor: "black",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  buttonText: {
    color: "#515151",
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 15,
  },
  stickyCircle: {
    position: "absolute",
    bottom: -50,
    right: -50,
    width: 250,
    height: 250,
    resizeMode: "contain",
    zIndex: -1,
  },
});

export default BimbinganDosen;
