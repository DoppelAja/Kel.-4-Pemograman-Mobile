import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View, TouchableOpacity, Image } from "react-native";

const App = () => {
  const [searchText, setSearchText] = useState("");

  const handleNotificationPress = () => {
    // Logika saat ikon notifikasi ditekan
    alert("Notifikasi ditekan!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        {/* Search Bar */}
        <TextInput style={styles.input} placeholder="Cari sesuatu..." value={searchText} onChangeText={(text) => setSearchText(text)} />

        {/* Icon Notifikasi */}
        <TouchableOpacity onPress={handleNotificationPress}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/000000/appointment-reminders.png" }} // Gambar ikon notifikasi
            style={styles.notificationIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Letakkan konten di bagian atas layar
    paddingHorizontal: 20,
    paddingTop: 10, // Memberi jarak dari bagian atas layar
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Pisahkan antara search bar dan ikon notifikasi
    alignItems: "center",
    marginVertical: 10,
  },
  input: {
    flex: 1, // Biarkan search bar mengambil sisa ruang yang tersedia
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10, // Jarak antara search bar dan ikon notifikasi
  },
  notificationIcon: {
    width: 30,
    height: 30,
  },
});

export default App;
