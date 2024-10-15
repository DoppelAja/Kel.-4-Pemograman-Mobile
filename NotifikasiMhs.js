import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NotifikasiMhs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifikasi</Text>
      <Text>Belum ada notifikasi baru.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default NotifikasiMhs;
