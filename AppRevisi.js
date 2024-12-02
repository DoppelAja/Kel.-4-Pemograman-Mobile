import React from "react";
import { Button, View, ImageBackground, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Halaman Awal
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

      <TouchableOpacity style={styles.buttonDsn} onPress={() => navigation.navigate("Details")}>
        <Text style={styles.buttonTextDsn}>Dosen</Text>
      </TouchableOpacity>
    </View>
  );
};

// Halaman Mahasiswa
const DashboardMhs = () => {
  return (
    <View style={styles.container2}>
      <ScrollView style={styles.scrollContent}>
        {/* Bagian Hi, Fakhri */}
        <ImageBackground
          source={require("./assets/BackgroundCard.png")}
          style={styles.greetingContainer}
          imageStyle={{ borderRadius: 20 }} // Untuk membuat sudut gambar menjadi bulat
        >
          <Text style={styles.greetingText}>
            Hi, <Text style={styles.greetingName}>Fakhri</Text>
          </Text>
          <Text style={styles.subText}>Gimana proses skripsi mu?</Text>

          {/* Progress Skripsi */}
          <View style={styles.progressContainer}>
            <View style={styles.rowContainer}>
              <Image source={require("./assets/fotoprofil.png")} style={styles.notificationIcon} />
              <View style={styles.progressInfoContainer}>
                <Text style={styles.progressText}>55% Skripsi Telah Dikerjakan</Text>
                <View style={styles.progressBarBackground}>
                  <View style={styles.progressBarFill}></View>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>

        {/* Menu Bimbingan, Janji Temu, Review */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Bimbingan")}>
            <Image
              source={require("./assets/OnlineLecture.png")} // Ikon Bimbingan
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>Bimbingan</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require("./assets/Kalendar.png")} // Ikon Kalender untuk Janji Temu
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>Janji Temu</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require("./assets/AddDokumen.png")} // Ikon Review
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>Review</Text>
          </TouchableOpacity>
        </View>

        {/* Notifikasi */}
        <View style={styles.scrollView}>
          <View style={styles.notificationContainerTitle}>
            <View style={styles.textContainer}>
              <Text style={styles.notificationTitle}>Review Masuk</Text>
              <Text style={styles.notificationTitle2}>Dari Joko, S.Kom., M.T.</Text>
            </View>
            <Image source={require("./assets/IkonNotif.png")} style={styles.menuIconNotif} />
          </View>
          <View style={styles.notificationContainer}>
            <View style={styles.notificationMessage}>
              <Text style={styles.notificationText}>“udah bagus untuk bab II nya tapi perbaiki lagi kata katanya menjadi baku dan bahasa indonesia”</Text>
            </View>
          </View>

          {/* Notifikasi Tambahan */}
          <View style={styles.notificationContainerTitle}>
            <View>
              <Text style={styles.notificationTitle}>Ada Janji Temu Nih</Text>
              <Text style={styles.notificationTitle2}>Dengan Joko, S.Kom., M.T.</Text>
            </View>
            <Image
              source={require("./assets/IkonNotif2.png")} // Ikon Kalender untuk Janji Temu
              style={styles.menuIconNotif}
            />
          </View>
          <View style={styles.notificationContainer}>
            <View style={styles.notificationMessage}>
              <Text style={styles.notificationText}>24 April 2024</Text>
              <Text style={styles.notificationText}>At 10:00 - 12:00 AM</Text>
            </View>
          </View>

          {/* Notifikasi Tambahan */}
          <View style={styles.notificationContainerTitle}>
            <View>
              <Text style={styles.notificationTitle}>Review Masuk</Text>
              <Text style={styles.notificationTitle2}>Dengan Joko, S.Kom., M.T.</Text>
            </View>
            <Image
              source={require("./assets/IkonNotif.png")} // Ikon Kalender untuk Janji Temu
              style={styles.menuIconNotif}
            />
          </View>
          <View style={styles.notificationContainer}>
            <View style={styles.notificationMessage}>
              <Text style={styles.notificationText}>”Dan jangan lupa untuk kerjakan BAB III nya”</Text>
            </View>
          </View>
        </View>
      </ScrollView>

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
    </View>
  );
};

// Detail Screen
const DetailsScreen = ({}) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button title="Go to Details... again" onPress={() => navigation.push("Details")} />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
    </View>
  );
};

// Detail Screen
const HalamanBimbingan = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button title="Go to Details... again" onPress={() => navigation.push("Details")} />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
    </View>
  );
};

// Stack Navigator
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HalamanAwal">
        <Stack.Screen name="SIKRISPI" component={DashboardAwal} />
        <Stack.Screen
          name="Dashboard Mahasiswa"
          component={DashboardMhs}
          options={{
            headerTitle: () => <CustomHeader />, // Gunakan komponen custom sebagai header
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Bimbingan" component={HalamanBimbingan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const CustomHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <TextInput style={styles.input} placeholder="Masukkan kata pencarian" placeholderTextColor="#c4c4c4" />
      <Image source={require("./assets/Bell_pin.png")} style={styles.notificationIcon} />
    </View>
  );
};

// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: "#F5F5F5",
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
  greetingContainer: {
    padding: 20,
    borderRadius: 20,
    marginVertical: 10,
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
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Putih dengan sedikit transparan
    padding: 10,
    borderRadius: 20,
    flexDirection: "column", // Progress bar di bawah teks
  },
  rowContainer: {
    flexDirection: "row", // Menyusun gambar dan progress secara horizontal
    alignItems: "center", // Menyelaraskan item secara vertikal di tengah
  },
  notificationIcon: {
    width: 30, // Ukuran yang lebih besar untuk ikon profil
    height: 30,
    marginRight: 15, // Jarak antara ikon dan progress bar
  },
  progressInfoContainer: {
    flex: 1, // Membuat container ini mengambil sisa ruang
    flexDirection: "column", // Teks dan progress bar vertikal
  },
  progressText: {
    color: "#333", // Warna teks gelap
    fontSize: 14,
    fontWeight: "bold", // Teks tebal
    marginBottom: 5, // Jarak antara teks dan progress bar
  },
  progressBarBackground: {
    backgroundColor: "#143C5E", // Warna latar progress bar
    height: 10, // Tinggi progress bar
    borderRadius: 10, // Membulatkan ujung progress bar
    overflow: "hidden",
    flex: 1, // Progress bar mengambil ruang yang tersisa
  },
  progressBarFill: {
    width: "55%", // Panjang progress yang sudah tercapai
    height: "100%",
    backgroundColor: "#FFD700", // Warna progress yang sudah tercapai
  },
  menuContainer: {
    flexDirection: "row", // Untuk membuat menu sejajar horizontal
    justifyContent: "space-between", // Memberi jarak antar menu
    paddingHorizontal: 25,
    paddingTop: -10,
    marginTop: 10,
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 10,
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
    flexDirection: "row", // Membuat elemen dalam satu baris
    justifyContent: "space-between", // Memisahkan teks dan ikon ke kiri dan kanan
    alignItems: "center", // Menyelaraskan secara vertikal di tengah
    marginTop: 20, // Jarak atas dari menu
    backgroundColor: "#63ABE6", // Warna latar belakang
    borderTopLeftRadius: 20, // Sudut kiri atas membulat
    borderTopRightRadius: 20, // Sudut kanan atas membulat
    paddingVertical: 10, // Padding atas-bawah untuk memberi ruang
    paddingHorizontal: 15, // Padding kiri-kanan untuk memberi jarak
  },
  notificationContainer: {
    backgroundColor: "#fff", // Warna latar belakang untuk notifikasi
    borderBottomLeftRadius: 20, // Sudut kiri bawah membulat
    borderBottomRightRadius: 20, // Sudut kanan bawah membulat
    paddingTop: 5,
    paddingBottom: 5,
  },
  notificationTitle: {
    fontSize: 16, // Ukuran teks utama
    fontWeight: "bold", // Teks tebal
    color: "#FFF", // Warna teks putih
  },
  notificationTitle2: {
    fontSize: 12, // Ukuran teks kedua
    color: "#FFF", // Warna teks putih
  },
  notificationMessage: {
    padding: 5, // Padding dalam kontainer pesan
  },
  notificationText: {
    fontSize: 14, // Ukuran font pesan
    color: "#515151", // Warna teks abu-abu
    marginLeft: 10, // Jarak dari tepi kiri
  },
  menuIconNotif: {
    width: 24, // Lebar ikon notifikasi
    height: 24, // Tinggi ikon notifikasi
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

export default App;
