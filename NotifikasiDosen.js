import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet, ActivityIndicator } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

const NotifikasiDosen = () => {
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
    <View style={styles.container2}>
      <Text style={styles.subtitle}>Atur notifikasi yang ingin kamu terima disini</Text>
      <ScrollView style={styles.scrollContent}>
        <View style={styles.scrollView}>
          {notifications.map((item) => (
            <View key={item.id}>
              <View style={styles.notificationContainerTitle}>
                <View>
                  <Text style={styles.notificationTitle}>{item.type === "Janji Temu" ? "Ada Janji Temu Nih" : "Ajuan review"}</Text>
                  <Text style={styles.notificationTitle2}>{item.type === "Janji Temu" ? `Dengan ${item.mahasiswa}` : `Dari ${item.mahasiswa}`}</Text>
                </View>
                <Image source={item.type === "Janji Temu" ? require("./assets/IkonNotif2.png") : require("./assets/IkonNotif.png")} style={styles.menuIconNotif} />
              </View>
              <View style={styles.notificationContainer}>
                <View style={styles.notificationMessage}>
                  {item.type === "Janji Temu" ? (
                    <>
                      <Text style={styles.notificationText}>{item.date}</Text>
                      <Text style={styles.notificationText}>{item.time}</Text>
                    </>
                  ) : (
                    <Text style={styles.notificationText}>{item.description}</Text>
                  )}
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
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
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginTop: 8,
    paddingTop: 10,
  },
  scrollView: {
    marginTop: 10,
  },
  notificationContainerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#3470A2",
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
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NotifikasiDosen;
