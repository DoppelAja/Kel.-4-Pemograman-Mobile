import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal, TextInput } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { db } from "./firebaseConfig"; // Pastikan path ini sesuai
import { collection, addDoc, getDocs } from "firebase/firestore";

const JanjiTemuMhs = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDosen, setSelectedDosen] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [janjiTemuList, setJanjiTemuList] = useState([]);

  const dosenList = [
    { id: "1", name: "Joko, S.Kom., M.T" },
    { id: "2", name: "Clara, S.Kom., M.Kom" },
  ];

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

  const handleSubmit = async () => {
    if (selectedDosen && date && time) {
      const formattedDate = date.toLocaleDateString();
      const formattedTime = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      try {
        await addDoc(collection(db, "janjiTemu"), {
          dosen: selectedDosen,
          date: formattedDate,
          time: formattedTime,
        });
        fetchJanjiTemu(); // Refresh data
        setModalVisible(false);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } else {
      alert("Mohon lengkapi semua field!");
    }
  };

  useEffect(() => {
    fetchJanjiTemu();
  }, []);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.subtitle}>Tentukan Janji Temu anda dengan dosen pembimbing pilihan</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ketersediaan Dosen</Text>
          <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
            <Image source={require("./assets/IkonTambah.png")} style={styles.imageIcon} />
            <Text style={styles.buttonText}>Buat Janji Temu</Text>
          </TouchableOpacity>

          {/* Daftar dosen */}
          <View style={styles.card}>
            <Image source={require("./assets/Joko.png")} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.lecturerNames}>Dosen Pembimbing 1</Text>
              <Text style={styles.lecturerTitle}>Joko, S.Kom., M.T</Text>
            </View>
            <View style={styles.statusContainer}>
              <Text style={styles.statusAvailable}>Ada</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Image source={require("./assets/Clara.png")} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.lecturerNames}>Dosen Pembimbing 2</Text>
              <Text style={styles.lecturerTitle}>Clara, S.Kom., M.Kom</Text>
            </View>
            <View style={styles.statusContainer}>
              <Text style={styles.statusNotAvailable}>Tidak Ada</Text>
            </View>
          </View>
        </View>

        <Text style={styles.subtitle}>Tentukan Janji Temu anda dengan dosen pembimbing pilihan</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Daftar Janji Temu</Text>
          {janjiTemuList.map((item) => (
            <View style={styles.appointmentRow} key={item.id}>
              <View style={styles.dateContainer}>
                <Text style={styles.date}>{item.date.split("/")[0]}</Text>
                <Text style={styles.month}>{item.date.split("/")[1]}</Text>
                <Text style={styles.year}>{item.date.split("/")[2]}</Text>
              </View>
              <View style={styles.appointmentCard}>
                <Text style={styles.lecturerName}>{item.dosen}</Text>
                <Text style={styles.appointmentText}>{`${item.date}, ${item.time}`}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Ajukan Janji Temu</Text>
            <Text style={styles.inputLabel}>Pilih Dosen</Text>
            <Picker selectedValue={selectedDosen} onValueChange={(value) => setSelectedDosen(value)} style={styles.picker}>
              <Picker.Item label="Pilih Dosen" value="" />
              {dosenList.map((dosen) => (
                <Picker.Item key={dosen.id} label={dosen.name} value={dosen.name} />
              ))}
            </Picker>

            <Text style={styles.inputLabel}>Pilih Tanggal</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
              <Text>{date.toLocaleDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && <DateTimePicker value={date} mode="date" display="default" onChange={onChangeDate} />}

            <Text style={styles.inputLabel}>Pilih Jam</Text>
            <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.input}>
              <Text>{time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</Text>
            </TouchableOpacity>
            {showTimePicker && <DateTimePicker value={time} mode="time" display="default" onChange={onChangeTime} />}

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Kirim</Text>
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
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginTop: 8,
    paddingTop: 20,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#FFD700",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 20,
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
    paddingLeft: 5,
  },
  imageIcon: {
    height: 15,
    width: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#63ABE6",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 6,
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  cardContent: {
    marginLeft: 10,
    flex: 1,
  },
  statusContainer: {
    position: "absolute",
    top: 15,
    right: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  lecturerNames: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  lecturerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 5,
  },
  statusAvailable: {
    backgroundColor: "#79E2B1",
    color: "#333",
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 12,
  },
  statusNotAvailable: {
    backgroundColor: "#F44336",
    color: "#333",
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 12,
  },
  appointmentRow: {
    flexDirection: "row",
    alignItems: "stretch", // Pastikan semua elemen dalam baris memiliki tinggi sama
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    color: "#63ABE6",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    marginTop: 5,
    marginBottom: 10,
  },
  picker: {
    width: "100%",
    height: 50,
    marginTop: 5,
  },
  closeButtonContainer: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },

  closeButton: {
    width: 30,
    height: 30,
  },

  submitButton: {
    backgroundColor: "#63ABE6",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "black",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  submitButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
    marginBottom: -20,
  },
  actionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
  },
});

export default JanjiTemuMhs;
