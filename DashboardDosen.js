import React from "react";
import { View, Text, ImageBackground, ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native";

const DashboardDosen = ({ navigation }) => {
  return (
    <View style={styles.container2}>
      <ScrollView style={styles.scrollContent}>
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Bimbingan Dosen")}>
            <Image source={require("./assets/OnlineLecture.png")} style={styles.menuIcon} />
            <Text style={styles.menuText}>Bimbingan</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Janji Temu Dosen")}>
            <Image source={require("./assets/Kalendar.png")} style={styles.menuIcon} />
            <Text style={styles.menuText}>Janji Temu</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Review Dosen")}>
            <Image source={require("./assets/AddDokumen.png")} style={styles.menuIcon} />
            <Text style={styles.menuText}>Review</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.scrollView}>
          <TouchableOpacity style={styles.notificationContainerTitle} onPress={() => navigation.navigate("Review Dosen")}>
            <View style={styles.textContainer}>
              <Text style={styles.notificationTitle}>Ajuan Review</Text>
              <Text style={styles.notificationTitle2}>Dari Mahasiswa: Fakhri</Text>
            </View>
            <Image source={require("./assets/IkonNotif.png")} style={styles.menuIconNotif} />
          </TouchableOpacity>
          <View style={styles.notificationContainer}>
            <View style={styles.notificationMessage}>
              <Text style={styles.notificationText}>“Tugas ini harus diselesaikan dalam 3 hari.”</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.notificationContainerTitle} onPress={() => navigation.navigate("Janji Temu Dosen")}>
            <View>
              <Text style={styles.notificationTitle}>Janji Temu Mahasiswa</Text>
              <Text style={styles.notificationTitle2}>Dengan Mahasiswa: Joko</Text>
            </View>
            <Image source={require("./assets/IkonNotif2.png")} style={styles.menuIconNotif} />
          </TouchableOpacity>
          <View style={styles.notificationContainer}>
            <View style={styles.notificationMessage}>
              <Text style={styles.notificationText}>26 April 2024</Text>
              <Text style={styles.notificationText}>At 11:00 - 12:00 AM</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.notificationContainerTitle} onPress={() => navigation.navigate("Review Dosen")}>
            <View>
              <Text style={styles.notificationTitle}>Ajuan Review</Text>
              <Text style={styles.notificationTitle2}>Dari Mahasiswa: Fakhri</Text>
            </View>
            <Image source={require("./assets/IkonNotif.png")} style={styles.menuIconNotif} />
          </TouchableOpacity>
          <View style={styles.notificationContainer}>
            <View style={styles.notificationMessage}>
              <Text style={styles.notificationText}>“Silakan review tugas dan berikan feedback.”</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomMenuContainer}>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Image source={{ uri: "https://img.icons8.com/ios-filled/50/000000/home.png" }} style={styles.bottomMenuIcon} />
          <Text style={styles.bottomMenuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Image source={{ uri: "https://img.icons8.com/ios-filled/50/000000/compass.png" }} style={styles.bottomMenuIcon} />
          <Text style={styles.bottomMenuText}>Lainnya</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Image source={{ uri: "https://img.icons8.com/ios-filled/50/000000/graduation-cap.png" }} style={styles.bottomMenuIcon} />
          <Text style={styles.bottomMenuText}>Akademik</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Image source={{ uri: "https://img.icons8.com/ios-filled/50/000000/secured-letter.png" }} style={styles.bottomMenuIcon} />
          <Text style={styles.bottomMenuText}>Pesan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Image source={{ uri: "https://img.icons8.com/ios-filled/50/000000/user.png" }} style={styles.bottomMenuIcon} />
          <Text style={styles.bottomMenuText}>Akun</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: "#FFF",
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  menuItem: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 15,
    shadowColor: "black",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  menuIcon: {
    width: 50,
    height: 50,
  },
  menuText: {
    marginTop: 5,
    fontSize: 14,
    color: "#939393",
    fontWeight: "bold",
  },
  scrollView: {
    marginTop: 10,
  },
  notificationContainerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#63ABE6",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  notificationContainer: {
    backgroundColor: "#fff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 5,
    paddingBottom: 5,
    shadowColor: "black",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
  notificationTitle2: {
    fontSize: 12,
    color: "#FFF",
  },
  notificationMessage: {
    padding: 5,
  },
  notificationText: {
    fontSize: 14,
    color: "#515151",
    marginLeft: 10,
  },
  menuIconNotif: {
    width: 24,
    height: 24,
  },
  bottomMenuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "black",
    shadowOpacity: 0.8,
    elevation: 20,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  bottomMenuItem: {
    alignItems: "center",
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

export default DashboardDosen;