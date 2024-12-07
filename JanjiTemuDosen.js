import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal, TextInput, Switch } from "react-native";
import { db } from "./firebaseConfig";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

const JanjiTemuDosen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [janjiTemuList, setJanjiTemuList] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);

  const fetchJanjiTemu = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "janjiTemu"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setJanjiTemuList(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleUpdate = async () => {
    if (selectedAppointment && newDate && newTime) {
      try {
        const appointmentDoc = doc(db, "janjiTemu", selectedAppointment.id);
        await updateDoc(appointmentDoc, {
          date: newDate,
          time: newTime,
        });
        fetchJanjiTemu();
        setModalVisible(false);
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    } else {
      alert("Mohon lengkapi semua field!");
    }
  };

  const toggleAvailability = async (value) => {
    setIsAvailable(value);
    try {
      const docRef = doc(db, "janjiTemu", "dosen");
      await updateDoc(docRef, {
        available: value,
      });
    } catch (error) {
      console.error("Error updating availability: ", error);
    }
  };

  useEffect(() => {
    fetchJanjiTemu();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.availabilityContainer}>
          <View style={styles.availabilityInfo}>
            <Text style={styles.subtitle}>Kesediaan Anda</Text>
            <Switch trackColor={{ false: "#FB4646", true: "#9AE97F" }} thumbColor={isAvailable ? "#9AE97F" : "#FB4646"} onValueChange={toggleAvailability} value={isAvailable} />
          </View>
        </View>

        <Text style={styles.availabilityDescription}>Beritahu mahasiswa bersedia atau tidaknya Anda untuk melakukan bimbingan</Text>

        <Text style={styles.sectionTitle}>Daftar Janji Temu</Text>
        {janjiTemuList.map((item) => (
          <View style={styles.appointmentRow} key={item.id}>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>{item.date.split("/")[0]}</Text>
              <Text style={styles.month}>{item.date.split("/")[1]}</Text>
              <Text style={styles.year}>{item.date.split("/")[2]}</Text>
            </View>
            <View style={styles.appointmentCard}>
              <Text style={styles.lecturerName}>{item.mahasiswa}</Text>
              <Text style={styles.appointmentText}>{`${item.date}, ${item.time}`}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButtonContainer} onPress={() => setModalVisible(false)}>
              <Image source={require("./assets/CloseButton.png")} style={styles.closeButton} />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Ubah Janji Temu</Text>
            <Text style={styles.inputLabel}>Tanggal Baru</Text>
            <TextInput style={styles.input} value={newDate} onChangeText={setNewDate} placeholder="DD/MM/YYYY" />
            <Text style={styles.inputLabel}>Jam Baru</Text>
            <TextInput style={styles.input} value={newTime} onChangeText={setNewTime} placeholder="HH:MM" />
            <TouchableOpacity style={styles.submitButton} onPress={handleUpdate}>
              <Text style={styles.submitButtonText}>Simpan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
  },
  availabilityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  availabilityInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 5,
  },
  availabilityDescription: {
    fontSize: 14,
    color: "#7B7B7B",
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  appointmentRow: {
    flexDirection: "row",
    alignItems: "stretch",
    marginBottom: 20,
  },
  dateContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#3470A2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "black",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  appointmentCard: {
    flex: 1,
    backgroundColor: "#FFF",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
    justifyContent: "center",
    alignSelf: "stretch",
    shadowColor: "black",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  date: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  month: {
    fontSize: 14,
    color: "#fff",
  },
  year: {
    fontSize: 14,
    color: "#fff",
  },
});

export default JanjiTemuDosen;
