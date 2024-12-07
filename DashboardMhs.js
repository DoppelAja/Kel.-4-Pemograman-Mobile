import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, ScrollView, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

const NotificationItem = ({ type, dosen, reviewer }) => {
  const isJanjiTemu = type === "Janji Temu";
  return (
    <View style={styles.notificationContainerTitle}>
      <View>
        <Text style={styles.notificationTitle}>{isJanjiTemu ? "Ada Janji Temu Nih" : "Review Masuk"}</Text>
        <Text style={styles.notificationTitle2}>{isJanjiTemu ? `Dengan ${dosen}` : `Dari ${reviewer}`}</Text>
      </View>
      <Image source={isJanjiTemu ? require("./assets/IkonNotif2.png") : require("./assets/IkonNotif.png")} style={styles.menuIconNotif} />
    </View>
  );
};

const DashboardMhs = ({ navigation }) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    try {
      const janjiTemuSnapshot = await getDocs(collection(db, "janjiTemu"));
      const janjiTemuData = janjiTemuSnapshot.docs.map((doc) => ({
        id: doc.id,
        type: "Janji Temu",
        ...doc.data(),
      }));

      const reviewsSnapshot = await getDocs(collection(db, "reviews"));
      const reviewsData = reviewsSnapshot.docs.map((doc) => ({
        id: doc.id,
        type: "Review",
        ...doc.data(),
      }));

      const allNotifications = [...janjiTemuData, ...reviewsData];
      setNotifications(allNotifications);
    } catch (error) {
      console.error("Error fetching notifications: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <ImageBackground source={require("./assets/BackgroundCard.png")} style={styles.greetingContainer} imageStyle={{ borderRadius: 20 }}>
          <Text style={styles.greetingText}>
            Hi, <Text style={styles.greetingName}>Fakhri</Text>
          </Text>
          <Text style={styles.subText}>Gimana proses skripsi mu?</Text>

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

        <View style={styles.menuContainer}>
          <MenuItem navigation={navigation} routeName="Janji Temu Mahasiswa" icon={require("./assets/Kalendar.png")} label="Janji Temu" />
          <MenuItem navigation={navigation} routeName="Review Mahasiswa" icon={require("./assets/AddDokumen.png")} label="Review" />
          <MenuItem navigation={navigation} routeName="Riwayat Mahasiswa" icon={require("./assets/IkonHistory.png")} label="Riwayat" />
        </View>

        <ScrollView style={styles.notificationScroll}>
          {notifications.map((item) => (
            <NotificationItem key={item.id} type={item.type} dosen={item.dosen} reviewer={item.reviewer} />
          ))}
        </ScrollView>
      </ScrollView>

      <BottomNavigation navigation={navigation} />
    </View>
  );
};

const MenuItem = ({ navigation, routeName, icon, label }) => (
  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate(routeName)}>
    <Image source={icon} style={styles.menuIcon} />
    <Text style={styles.menuText}>{label}</Text>
  </TouchableOpacity>
);

const BottomNavigation = ({ navigation }) => (
  <View style={styles.bottomMenuContainer}>
    <TouchableOpacity style={styles.bottomMenuItem}>
      <Image source={{ uri: "https://img.icons8.com/ios-filled/50/000000/home.png" }} style={styles.activebottomMenuIcon} />
      <Text style={styles.activebottomMenuText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomMenuItem} onPress={() => navigation.navigate("Janji Temu Mahasiswa")}>
      <Image source={{ uri: "https://img.icons8.com/?size=100&id=116296&format=png&color=000000" }} style={styles.bottomMenuIcon} />
      <Text style={styles.bottomMenuText}>Janji Temu</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomMenuItem} onPress={() => navigation.navigate("Review Mahasiswa")}>
      <Image source={{ uri: "https://img.icons8.com/?size=100&id=99292&format=png&color=000000" }} style={styles.bottomMenuIcon} />
      <Text style={styles.bottomMenuText}>Review</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomMenuItem} onPress={() => navigation.navigate("Riwayat Mahasiswa")}>
      <Image source={{ uri: "https://img.icons8.com/?size=100&id=10058&format=png&color=000000" }} style={styles.bottomMenuIcon} />
      <Text style={styles.bottomMenuText}>Riwayat</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomMenuItem} onPress={() => navigation.navigate("AkunMhs")}>
      <Image source={{ uri: "https://img.icons8.com/ios-filled/50/000000/user.png" }} style={styles.bottomMenuIcon} />
      <Text style={styles.bottomMenuText}>Akun</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  notificationScroll: {
    maxHeight: 450,
    marginTop: 10,
  },
  greetingContainer: {
    padding: 20,
    borderRadius: 20,
    marginVertical: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  greetingText: {
    fontSize: 30,
    color: "#FFF",
    fontWeight: "bold",
  },
  greetingName: {
    color: "#FFD700",
  },
  subText: {
    color: "#FFF",
    fontSize: 16,
    marginVertical: 5,
  },
  progressContainer: {
    marginTop: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 10,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  progressInfoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  progressText: {
    color: "#000",
  },
  progressBarBackground: {
    backgroundColor: "#143C5E",
    height: 10,
    borderRadius: 10,
    overflow: "hidden",
    flex: 1,
  },
  progressBarFill: {
    height: "100%",
    width: "55%",
    backgroundColor: "#FFD700",
    borderRadius: 5,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 8,
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
    marginLeft: 20,
    marginRight: 20,
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
  notificationContainerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#3470A2",
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginLeft: 20,
    marginRight: 20,
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
  activebottomMenuIcon: {
    width: 20,
    height: 20,
    tintColor: "#FFC727",
  },
  bottomMenuIcon: {
    width: 20,
    height: 20,
    tintColor: "#8C8994",
  },
  activebottomMenuText: {
    fontSize: 12,
    color: "#FFC727",
  },
  bottomMenuText: {
    fontSize: 12,
    color: "#8C8994",
  },
});

export default DashboardMhs;