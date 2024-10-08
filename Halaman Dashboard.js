import React from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar dan Ikon Notifikasi */}
      <View style={styles.headerContainer}>
        <TextInput style={styles.input} placeholder="Masukkan kata pencarian" placeholderTextColor="#c4c4c4" />
        <Image
          source={{ uri: "https://img.icons8.com/ios-filled/50/FFD700/appointment-reminders.png" }} // Ikon notifikasi kuning
          style={styles.notificationIcon}
        />
      </View>

      {/* Bagian Hi, Fakhri */}
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>
          Hi, <Text style={styles.greetingName}>Fakhri</Text>
        </Text>
        <Text style={styles.subText}>Gimana proses skripsi mu?</Text>

        {/* Progress Skripsi */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>55% Skripsi Telah Dikerjakan</Text>
          <View style={styles.progressBarBackground}>
            <View style={styles.progressBarFill}></View>
          </View>
        </View>
      </View>

      {/* Menu Bimbingan, Janji Temu, Review */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/000000/classroom.png" }} // Ikon Bimbingan
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>Bimbingan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/4CAF50/calendar.png" }} // Ikon Kalender untuk Janji Temu
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>Janji Temu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/FFD700/note.png" }} // Ikon Review
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>Review</Text>
        </TouchableOpacity>
      </View>

      {/* Notifikasi */}
      <View style={styles.notificationContainerTitle}>
        <Text style={styles.notificationTitle}>Review Masuk</Text>
        <Text style={styles.notificationTitle2}>Dari Joko, S.Kom., M.T.</Text>
      </View>
      <View style={styles.notificationContainer}>
        <View style={styles.notificationMessage}>
          <Text style={styles.notificationText}>Anda memiliki 3 notifikasi baru!</Text>
          <Text style={styles.notificationText}>Bimbingan Anda dijadwalkan besok.</Text>
          <Text style={styles.notificationText}>Janji temu dengan dosen telah dikonfirmasi.</Text>
          <Text style={styles.notificationText}>Tugas baru telah ditambahkan.</Text>
        </View>
      </View>

      {/* Notifikasi Tambahan */}
      <View style={styles.notificationContainerTitle}>
        <Text style={styles.notificationTitle}>Ada Janji Temu Nih</Text>
        <Text style={styles.notificationTitle2}>Dengan Joko, S.Kom., M.T.</Text>
      </View>
      <View style={styles.notificationContainer}>
        <View style={styles.notificationMessage}>
          <Text style={styles.notificationText}>Pengingat: Serahkan tugas sebelum akhir minggu.</Text>
          <Text style={styles.notificationText}>Anda telah menerima umpan balik untuk tugas terakhir.</Text>
          <Text style={styles.notificationText}>Jadwal seminar telah diperbarui.</Text>
        </View>
      </View>

      {/* Menu Bar Bawah */}
      <View style={styles.bottomMenuContainer}>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/000000/home.png" }} // Ikon Home
            style={styles.bottomMenuIcon}
          />
          <Text style={styles.bottomMenuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/000000/compass.png" }} // Ikon Kompas (Lainnya)
            style={styles.bottomMenuIcon}
          />
          <Text style={styles.bottomMenuText}>Lainnya</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/000000/graduation-cap.png" }} // Ikon Toga (Akademik)
            style={styles.bottomMenuIcon}
          />
          <Text style={styles.bottomMenuText}>Akademik</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/000000/secured-letter.png" }} // Ikon Amplop (Pesan)
            style={styles.bottomMenuIcon}
          />
          <Text style={styles.bottomMenuText}>Pesan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/000000/user.png" }} // Ikon Akun
            style={styles.bottomMenuIcon}
          />
          <Text style={styles.bottomMenuText}>Akun</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: "#F5F5F5",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#3470A2", // Warna biru sesuai gambar
    padding: 10,
    borderRadius: 15,
    marginTop: 40, // Menambahkan margin atas untuk menjauhkan dari menu di atas
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#FFF",
    marginRight: 10,
  },
  notificationIcon: {
    width: 30,
    height: 30,
  },
  greetingContainer: {
    backgroundColor: "#3470A2", // Sesuaikan dengan warna biru pada bagian "Hi, Fakhri"
    padding: 20,
    borderRadius: 15,
    marginVertical: 10,
    borderRadius: 20,
  },
  greetingText: {
    fontSize: 30,
    color: "#FFF",
    fontWeight: "bold",
  },
  greetingName: {
    color: "#FFD700", // Warna kuning sesuai gambar
  },
  subText: {
    color: "#FFF",
    fontSize: 16,
    marginVertical: 5,
  },
  progressContainer: {
    marginTop: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Putih dengan opacity 50%
    padding: 10,
    borderRadius: 20,
  },
  progressText: {
    color: "#333",
    fontSize: 14,
  },
  progressBarBackground: {
    backgroundColor: "#143C5E",
    height: 10,
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 5,
  },
  progressBarFill: {
    width: "55%", // Sesuai dengan progress 55%
    height: "100%",
    backgroundColor: "#FFD700", // Warna kuning pada progress bar
  },
  menuContainer: {
    flexDirection: "row", // Untuk membuat menu sejajar horizontal
    justifyContent: "space-between", // Memberi jarak antar menu
    paddingHorizontal: 25,
    marginTop: 10,
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 5,
  },
  menuItem: {
    alignItems: "center", // Menempatkan teks dan ikon di tengah
  },
  menuIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
    // backgroundColor: "#FFFFFF",
    margin: 15,
  },
  menuText: {
    fontSize: 14,
    color: "#939393",
    fontWeight: "bold",
  },
  notificationContainerTitle: {
    marginTop: 20, // Jarak atas dari menu
    backgroundColor: "#3470A2",
    borderTopLeftRadius: 20, // Hanya kiri atas
    borderTopRightRadius: 20, // Hanya kanan atas
  },
  notificationContainer: {
    backgroundColor: "#fff", // Warna latar belakang untuk notifikasi
    borderBottomLeftRadius: 20, // Hanya kiri atas
    borderBottomRightRadius: 20, // Hanya kanan atas
    paddingTop: 5,
    paddingBottom: 5,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    margin: 5,
    marginLeft: 15,
  },
  notificationTitle2: {
    fontSize: 12,
    color: "#FFF",
    margin: 5,
    marginLeft: 15,
  },
  notificationMessage: {
    padding: 5,
  },
  notificationText: {
    fontSize: 14,
    color: "#515151",
    marginLeft: 10,
  },
  bottomMenuContainer: {
    flexDirection: "row", // Menu diatur secara horizontal
    justifyContent: "space-between", // Memberi jarak antar menu
    backgroundColor: "#FFFFFF", // Warna latar belakang menu bar
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomMenuItem: {
    alignItems: "center", // Menempatkan teks dan ikon di tengah
  },
  bottomMenuIcon: {
    width: 20,
    height: 20,
    tintColor: "#8C8994",
  },
  bottomMenuText: {
    fontSize: 12,
    color: "#8C8994",
  },
});

export default HomeScreen;
