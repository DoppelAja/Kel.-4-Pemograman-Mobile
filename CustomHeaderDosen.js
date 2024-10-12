import React from "react";
import { View, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CustomHeaderDosen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TextInput style={styles.input} placeholder="Masukkan kata pencarian" placeholderTextColor="#c4c4c4" />
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Notifikasi Dosen")}>
        <Image source={require("./assets/Bell_pin.png")} style={styles.notificationIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: 320,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    paddingVertical: 5,
    borderRadius: 10,
    marginLeft: -15,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "#F0F0F0",
    borderRadius: 30,
    paddingHorizontal: 10,
    color: "#333",
  },
  notificationIcon: {
    width: 24,
    height: 24,
    marginLeft: 20,
  },
});

export default CustomHeaderDosen;