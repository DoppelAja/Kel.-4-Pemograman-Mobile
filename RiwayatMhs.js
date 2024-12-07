import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

const RiwayatMhs = () => {
  const [janjiTemu, setJanjiTemu] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const janjiTemuSnapshot = await getDocs(collection(db, "janjiTemu"));
      const janjiTemuData = janjiTemuSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const reviewsSnapshot = await getDocs(collection(db, "reviews"));
      const reviewsData = reviewsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setJanjiTemu(janjiTemuData);
      setReviews(reviewsData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Riwayat Janji Temu</Text>
      <FlatList
        data={janjiTemu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.item, styles.kartukonsul]}>
            <Text style={styles.label}>Dosen: {item.dosen}</Text>
            <Text style={styles.sublabel}>
              {item.date}, {item.time}
            </Text>
            <View style={styles.row}>
              <Image source={{ uri: "https://img.icons8.com/?size=100&id=59783&format=png&color=3470A2" }} style={styles.icons} />
              <Text style={styles.kartukonsulText}>Kartu Konsul.pdf</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.btnkartukonsul}>Download Kartu Konsul</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Text style={styles.title}>Riwayat Review</Text>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.label}>Reviewer: {item.reviewer}</Text>
            <Text>{item.description}</Text>
            <View style={styles.row}>
              <Image source={{ uri: "https://img.icons8.com/?size=100&id=aBrh3QHCPxYu&format=png&color=000000" }} style={styles.icons} />
              <Text style={styles.subject}>{item.subject}</Text>
            </View>
            <Text style={[styles.status, item.status === "Menunggu" ? styles.statusWaiting : item.status === "Disetujui" ? styles.statusApproved : {}]}>{item.status}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  item: {
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  row: {
    width: "35%",
    flexDirection: "row",
    alignItems: "center",
  },
  icons: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  kartukonsul: {
    backgroundColor: "#fff",
  },
  kartukonsulText: {
    color: "#000",
  },
  btnkartukonsul: {
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    textAlign: "center",
    backgroundColor: "#3470A2",
    color: "#fff",
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
    color: "#3470A2",
  },
  sublabel: {
    color: "#000",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  status: {
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    textAlign: "center",
  },
  statusWaiting: {
    backgroundColor: "#FFDD57",
    color: "#000",
  },
  statusApproved: {
    backgroundColor: "#56D288",
    color: "#000",
  },
});

export default RiwayatMhs;
