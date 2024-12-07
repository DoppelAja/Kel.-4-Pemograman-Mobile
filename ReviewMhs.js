import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { db } from "./firebaseConfig";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

const ReviewMhs = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [namaMahasiswa, setStudentName] = useState("");
  const [selectedReviewer, setSelectedReviewer] = useState("");
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "reviews"), (snapshot) => {
      const fetchedReviews = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(fetchedReviews);
    });

    return () => unsubscribe();
  }, []);

  const openModal = () => setModalVisible(true);
  const closeModal = () => {
    setModalVisible(false);
    setStudentName("");
    setSelectedReviewer("");
    setFile("");
    setDescription("");
  };

  const submitReview = async () => {
    if (namaMahasiswa && selectedReviewer && file && description) {
      await addDoc(collection(db, "reviews"), {
        mahasiswa: namaMahasiswa,
        reviewer: selectedReviewer,
        subject: file,
        description: description,
        status: "Menunggu",
      });
      closeModal();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Beritahu dosenmu jika kamu ingin mensubmit review progress skripsimu</Text>
      <TouchableOpacity style={styles.submitButton} onPress={openModal}>
        <Text style={styles.submitButtonText}>Ajukan Review Baru</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Ajuan Review</Text>
      <ScrollView>
        {reviews.map((review) => (
          <View key={review.id} style={styles.reviewCard}>
            <Text style={styles.reviewTitle}>{review.subject}</Text>
            <Text style={styles.reviewer}>Dosen: {review.reviewer}</Text>
            <Text style={styles.message}>{review.description}</Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>{review.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Ajukan Review Baru</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Image source={require("./assets/CloseButton.png")} style={styles.closeButtonImage} />
            </TouchableOpacity>

            <Text style={styles.modalLabel}>Nama Mahasiswa</Text>
            <TextInput style={styles.textInput} placeholder="Masukkan nama mahasiswa" value={namaMahasiswa} onChangeText={setStudentName} />

            <Text style={styles.modalLabel}>Pilih Dosen</Text>
            <Picker selectedValue={selectedReviewer} style={styles.picker} onValueChange={(itemValue) => setSelectedReviewer(itemValue)}>
              <Picker.Item label="Pilih Dosen" value="" />
              <Picker.Item label="Joko, S.Kom., M.T" value="Joko, S.Kom., M.T" />
              <Picker.Item label="Clara, S.Kom., M.Kom" value="Clara, S.Kom., M.Kom" />
            </Picker>

            <Text style={styles.modalLabel}>Nama Subject</Text>
            <TextInput style={styles.textInput} placeholder="Masukkan nama file" value={file} onChangeText={setFile} />

            <Text style={styles.modalLabel}>Deskripsi Review</Text>
            <TextInput style={styles.textInput} placeholder="Ketikkan Deskripsi Anda" value={description} onChangeText={setDescription} multiline />

            <TouchableOpacity style={styles.submitButton} onPress={submitReview}>
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
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
    marginBottom: 40,
    paddingTop: 10,
    paddingLeft: 10,
  },
  submitButton: {
    backgroundColor: "#3470A2",
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
    width: "100%",
  },
  submitButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  reviewCard: {
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    position: "relative",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    elevation: 4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },

  reviewTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#3470A2",
  },
  reviewer: {
    fontSize: 14,
    marginBottom: 10,
    color: "#3470A2",
  },
  message: {
    fontSize: 14,
    color: "#515151",
  },
  reviewerTextWhite: {
    color: "#FFF",
  },
  statusBadge: {
    position: "absolute",
    top: 15,
    right: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  statusText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#FFF",
  },
  approvedBackground: {
    backgroundColor: "#3470A2",
  },
  pendingBackground: {
    backgroundColor: "#FFF",
  },
  approvedText: {
    backgroundColor: "#56D288",
    color: "#333",
    padding: 3,
    borderRadius: 10,
  },
  revisionText: {
    backgroundColor: "#FF6EB4",
    color: "#333",
    padding: 3,
    borderRadius: 10,
  },
  pendingText: {
    backgroundColor: "#FFDD57",
    color: "#333",
    padding: 3,
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 10,
  },
  modalContent: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,
    paddingBottom: 5,
    width: "90%",
    alignItems: "center",
  },
  modalTitle: {
    color: "#3470A2",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 10,
    width: "100%",
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 10,
    padding: 10,
    width: "100%",
    height: 100,
    textAlignVertical: "top",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
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
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  closeButtonImage: {
    margin: 10,
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});

export default ReviewMhs;
