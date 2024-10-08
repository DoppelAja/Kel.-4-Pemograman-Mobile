import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, View, TouchableOpacity, Image, StatusBar } from "react-native";
import { ProgressBar } from 'react-native-paper'; // Gunakan ProgressBar dari react-native-paper

const App = () => {
  const [searchText, setSearchText] = useState("");

  const handleNotificationPress = () => {
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
            source={{ uri: "https://img.icons8.com/ios-filled/50/000000/appointment-reminders.png" }}
            style={styles.notificationIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Kartu progress */}
      <View style={styles.cardContainer}>
        <Text style={styles.greetingText}>Hi, <Text style={styles.nameText}>Fakhri</Text></Text>
        <Text style={styles.subText}>Gimana proses skripsi mu?</Text>
        
        {/* Progress Bar dan Gambar dengan Border Bersama */}
        <View style={styles.progressBarWrapper}>
          <View style={styles.progressContainer}>
            {/* Icon Skripsi */}
            <Image
              source={{ uri: "https://img.freepik.com/free-vector/computer-performance-boost-rocket-fast-data-transmission-power-measure-dial-with-pointer-scale-with-arrow-response-time-indicator-vector-isolated-concept-metaphor-illustration_335657-1993.jpg?t=st=1728379507~exp=1728383107~hmac=21897e52005015dad0bf919a7893a015fec7d804d662a7b05f1d3be89b160595&w=740" }}
              style={styles.skripsiIcon}
            />
            <View style={styles.textWrapper}>
              <Text style={styles.progressText}>55% Skripsi Telah Dikerjakan</Text>
              <ProgressBar progress={0.55} color="#FBC02D" style={styles.progressBar} />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonIcon}>
            <Text>💬</Text>
          </View>
          <Text style={styles.buttonText}>Bimbingan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonIcon}>
            <Text>🗓️➕</Text>
          </View>
          <Text style={styles.buttonText}>Janji Temu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonIcon}>
            <Text>📝➕</Text>
          </View>
          <Text style={styles.buttonText}>Review</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: "#E0F7FA", // Warna latar belakang untuk mencocokkan desain
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  notificationIcon: {
    width: 30,
    height: 30,
  },
  cardContainer: {
    backgroundColor: "#1E88E5", // Biru sesuai desain
    borderRadius: 25,
    padding: 20,
    marginTop: 20,
    elevation: 5,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  nameText: {
    color: "#FFC107", // Warna kuning untuk nama
  },
  subText: {
    color: "#E0F7FA", // Warna abu-abu muda
    marginBottom: 20,
  },
  progressBarWrapper: {
    borderWidth: 2,         // Border untuk area teks, gambar, dan progress bar
    borderColor: "#FFC107", // W arna kuning untuk border
    borderRadius: 30,       // Membuat border sedikit melengkung
    padding: 10,            // Memberikan padding agar terlihat lebih proporsional
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  skripsiIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderWidth: 2,         // Border untuk gambar
    borderColor: "#fff",    // Border warna putih untuk gambar
    borderRadius: 50,       // Membuat gambar bulat
  },
  textWrapper: {
    flex: 1,
  },
  progressText: {
    color: "#fff",
    marginBottom: 5,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#87CEEB',
    marginHorizontal: 8,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderColor: '#87CEEB',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default App;
