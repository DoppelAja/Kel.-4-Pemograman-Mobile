import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

const ReviewMhs = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedReviewer, setSelectedReviewer] = useState("");
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");

  const reviews = [
    {
      id: 1,
      reviewer: "Clara, S.Kom., M.Kom",
      message: "Berikut bab I saya bu, mohon dikoreksi. Terima kasih sebelumnya",
      status: "Menunggu",
    },
    {
      id: 2,
      reviewer: "Joko, S.Kom., M.T",
      message: "Skripsimu sudah tepat sekali, menyala abangkuh!!!",
      status: "Disetujui",
    },
    {
      id: 3,
      reviewer: "Joko, S.Kom., M.T",
      message: "Latar belakangnya pake CHATGPT ya nak?",
      status: "Revisi",
    },
  ];

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedReviewer("");
    setFile(null);
    setDescription("");
  };

  const submitReview = () => {
    console.log("Review submitted", { selectedReviewer, file, description });
    closeModal();
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
          <View key={review.id} style={[styles.reviewCard, review.status === "Menunggu" && styles.pendingBackground, (review.status === "Disetujui" || review.status === "Revisi") && styles.approvedBackground]}>
            <Text style={[styles.reviewTitle, (review.status === "Disetujui" || review.status === "Revisi") && styles.reviewerTextWhite]}>{review.status === "Menunggu" ? "Ajuan Review" : "Hasil Review"}</Text>
            <Text style={[styles.reviewer, (review.status === "Disetujui" || review.status === "Revisi") && styles.reviewerTextWhite]}>{review.reviewer}</Text>
            <Text style={[styles.message, (review.status === "Disetujui" || review.status === "Revisi") && styles.reviewerTextWhite]}>{review.message}</Text>
            <View style={styles.statusBadge}>
              <Text style={[styles.statusText, review.status === "Disetujui" && styles.approvedText, review.status === "Revisi" && styles.revisionText, review.status === "Menunggu" && styles.pendingText]}>{review.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <Image source={require("./assets/BackBimbingan.png")} style={styles.stickyCircle} />

      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Image source={require("./assets/CloseButton.png")} style={styles.closeButtonImage} />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Ajukan Review Baru</Text>

            <Text style={styles.modalLabel}>Pilih Dosen</Text>
            <View style={styles.pickerContainer}>
              <Picker selectedValue={selectedReviewer} style={styles.picker} onValueChange={(itemValue) => setSelectedReviewer(itemValue)}>
                <Picker.Item label="Pilih Dosen" value="" />
                <Picker.Item label="Joko, S.Kom., M.T" value="Joko, S.Kom., M.T" />
                <Picker.Item label="Clara, S.Kom., M.Kom" value="Clara, S.Kom., M.Kom" />
              </Picker>
            </View>

            <Text style={styles.modalLabel}>Pilih File</Text>
            <TextInput style={styles.textInput} placeholder="Nama file (tap untuk memilih)" value={file} onChangeText={setFile} editable={false} />

            <Text style={styles.modalLabel}>Deskripsi Review</Text>
            <TextInput style={styles.textInput} placeholder="Ketikkan Deskripsi Anda" value={description} onChangeText={setDescription} multiline />

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.actionButton, styles.submitButton]} onPress={submitReview}>
                <Text style={styles.submitButtonText}>Kirim</Text>
              </TouchableOpacity>
            </View>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  reviewCard: {
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    position: "relative",
    shadowColor: "black",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  reviewTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#515151",
  },
  reviewer: {
    fontSize: 14,
    color: "#515151",
    marginBottom: 10,
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
    backgroundColor: "#63ABE6",
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
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 10,
  },
  modalContent: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    alignItems: "center",
  },
  modalTitle: {
    color: "#63ABE6",
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
  fileButton: {
    backgroundColor: "#63ABE6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  fileButtonText: {
    color: "#FFF",
    fontWeight: "bold",
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
