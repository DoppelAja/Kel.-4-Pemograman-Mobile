import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

const NotificationItem = ({ type, dosen, reviewer }) => {
  const isJanjiTemu = type === "Janji Temu";
  return (
    <View style={styles.notificationContainerTitle}>
      <View>
        <Text style={styles.notificationTitle}>{isJanjiTemu ? "Ada Janji Temu Nih" : "Ajuan review"}</Text>
        <Text style={styles.notificationTitle2}>{isJanjiTemu ? `Dengan ${dosen}` : `Dari ${reviewer}`}</Text>
      </View>
      <Image source={isJanjiTemu ? require("./assets/IkonNotif2.png") : require("./assets/IkonNotif.png")} style={styles.menuIconNotif} />
    </View>
  );
};

const DashboardDosen = ({ navigation }) => {
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
        <View style={styles.menuContainer}>
          <MenuItem navigation={navigation} routeName="Janji Temu Dosen" icon={require("./assets/Kalendar.png")} label="Janji Temu" />
          <MenuItem navigation={navigation} routeName="Review Dosen" icon={require("./assets/AddDokumen.png")} label="Review" />
          <MenuItem navigation={navigation} routeName="Riwayat Dosen" icon={require("./assets/IkonHistory.png")} label="Riwayat" />
        </View>

        <ScrollView style={styles.notificationScroll}>
          {notifications.map((item) => (
            <NotificationItem key={item.id} type={item.type} dosen={item.mahasiswa} reviewer={item.mahasiswa} />
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
    <TouchableOpacity style={styles.bottomMenuItem} onPress={() => navigation.navigate("Janji Temu Dosen")}>
      <Image source={{ uri: "https://img.icons8.com/?size=100&id=116296&format=png&color=000000" }} style={styles.bottomMenuIcon} />
      <Text style={styles.bottomMenuText}>Janji Temu</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomMenuItem} onPress={() => navigation.navigate("Review Dosen")}>
      <Image source={{ uri: "https://img.icons8.com/?size=100&id=99292&format=png&color=000000" }} style={styles.bottomMenuIcon} />
      <Text style={styles.bottomMenuText}>Review</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomMenuItem} onPress={() => navigation.navigate("Riwayat Dosen")}>
      <Image source={{ uri: "https://img.icons8.com/?size=100&id=10058&format=png&color=000000" }} style={styles.bottomMenuIcon} />
      <Text style={styles.bottomMenuText}>Riwayat</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomMenuItem} onPress={() => navigation.navigate("AkunDosen")}>
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
    maxHeight: 750,
    marginTop: 10,
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
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 8,
    paddingTop: 15,
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

export default DashboardDosen;
