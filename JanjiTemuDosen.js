import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch, Image, Modal, TextInput } from "react-native";

const JanjiTemuDosen = () => {
  const [isAvailable, setIsAvailable] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const toggleAvailability = () => setIsAvailable((previousState) => !previousState);

  const openModal = () => setModalVisible(true);
  const closeModal = () => {
    setStartTime("");
    setEndTime("");
    setModalVisible(false);
  };

  const handleSubmit = () => {
    console.log(`Jam Mulai: ${startTime}, Jam Berakhir: ${endTime}`);
    closeModal();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.availabilityContainer}>
          <View style={styles.availabilityInfo}>
            <Text style={styles.subtitle}>Kesediaan Anda</Text>
            <TouchableOpacity onPress={openModal}>
              <Image source={require("./assets/IkonGear.png")} style={styles.settingsIcon} />
            </TouchableOpacity>
          </View>

          <Switch trackColor={{ false: "#FB4646", true: "#9AE97F" }} thumbColor={isAvailable ? "#9AE97F" : "#FB4646"} onValueChange={toggleAvailability} value={isAvailable} />
        </View>

        <Text style={styles.availabilityDescription}>Beritahu mahasiswa bersedia atau tidaknya Anda untuk melakukan bimbingan</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Daftar Janji Temu</Text>

          <View style={styles.appointmentRow}>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>24</Text>
              <Text style={styles.month}>April</Text>
              <Text style={styles.year}>2024</Text>
            </View>

            <View style={styles.appointmentCard}>
              <View style={styles.appointmentDetails}>
                <Text style={styles.lecturerName}>Dina Prikitiw</Text>
                <Text style={styles.appointmentLabel}>Janji Temu</Text>
                <Text style={styles.appointmentText}>Janji temu untuk menyelesaikan progress skripsi</Text>
              </View>
            </View>
          </View>

          <View style={styles.appointmentRow}>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>30</Text>
              <Text style={styles.month}>April</Text>
              <Text style={styles.year}>2024</Text>
            </View>

            <View style={styles.appointmentCard}>
              <View style={styles.appointmentDetails}>
                <Text style={styles.lecturerName}>Siti Aqila</Text>
                <Text style={styles.appointmentLabel}>Janji Temu</Text>
                <Text style={styles.appointmentText}>Janji temu untuk menyelesaikan progress skripsi BAB II</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <Image source={require("./assets/Lingkaran.png")} style={styles.stickyCircle} />

      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Atur Kesediaan Anda</Text>

            <View style={styles.timeContainer}>
              <View style={styles.timeInputContainer}>
                <Text style={styles.modalDescription}>Jam Mulai</Text>
                <TextInput style={styles.timeInput} placeholder="HH:MM" value={startTime} onChangeText={setStartTime} keyboardType="numeric" />
              </View>

              <View style={styles.timeInputContainer}>
                <Text style={styles.modalDescription}>Jam Berakhir</Text>
                <TextInput style={styles.timeInput} placeholder="HH:MM" value={endTime} onChangeText={setEndTime} keyboardType="numeric" />
              </View>
            </View>

            <TouchableOpacity style={styles.closeButton} onPress={handleSubmit}>
              <Text style={styles.closeButtonText}>Atur Jadwal</Text>
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
    padding: 20,
    backgroundColor: "#fff",
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
  settingsIcon: {
    width: 24,
    height: 24,
  },
  availabilityDescription: {
    fontSize: 14,
    color: "#7B7B7B",
    marginTop: 5,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  appointmentRow: {
    flexDirection: "row",
    alignItems: "center",
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
    alignSelf: "stretch",
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
    shadowColor: "black",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  appointmentDetails: {
    flex: 1,
  },
  lecturerName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3470A2",
  },
  appointmentLabel: {
    fontSize: 14,
    color: "#A8A8A8",
    marginBottom: 5,
  },
  appointmentText: {
    fontSize: 14,
    color: "#555",
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
  stickyCircle: {
    position: "absolute",
    bottom: -50,
    right: -50,
    width: 250,
    height: 250,
    resizeMode: "contain",
    zIndex: -1,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#63ABE6",
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },
  timeInputContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  timeInput: {
    height: 40,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: "100%",
  },
  closeButton: {
    backgroundColor: "#63ABE6",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    width: "100%",
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default JanjiTemuDosen;