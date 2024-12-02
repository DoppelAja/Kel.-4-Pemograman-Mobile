import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal, TextInput } from "react-native";

const ReviewDosen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const reviews = [
    {
      id: 1,
      reviewed: "M Fakhri Rizqullah",
      message: "Berikut bab I saya pak, mohon bimbingannya apakah sudah sesuai atau belum",
      status: "Menunggu",
      date: "2024-10-10",
      fileName: "Bab II M. Fakhri Rizqullah.pdf",
    },
    {
      id: 2,
      reviewed: "Joko, S.Kom., M.T",
      message: "Skripsimu sudah tepat sekali, menyala abangkuh!!!",
      status: "Disetujui",
    },
    {
      id: 3,
      reviewed: "Marconah Saputri",
      message: "Plagiasinya 100%, semuanya ngutip dari web tribun sumsel ya nak?",
      status: "Revisi",
    },
  ];

  const openModal = (review) => {
    setSelectedReview(review);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedReview(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Periksa ajuan review dari mahasiswa bimbingan</Text>

      <Text style={styles.sectionTitle}>Ajuan Review</Text>

      <ScrollView>
        {reviews.map((review) => (
          <TouchableOpacity key={review.id} onPress={review.status === "Menunggu" ? () => openModal(review) : null}>
            <View style={[styles.reviewCard, review.status === "Menunggu" && styles.pendingBackground, (review.status === "Disetujui" || review.status === "Revisi") && styles.approvedBackground]}>
              <Text style={[styles.reviewTitle, (review.status === "Disetujui" || review.status === "Revisi") && styles.reviewedTextWhite]}>{review.status === "Menunggu" ? "Ajuan Review" : "Telah Review"}</Text>
              <Text style={[styles.reviewed, (review.status === "Disetujui" || review.status === "Revisi") && styles.reviewedTextWhite]}>{review.reviewed}</Text>
              <Text style={[styles.message, (review.status === "Disetujui" || review.status === "Revisi") && styles.reviewedTextWhite]}>{review.message}</Text>
              <View style={styles.statusBadge}>
                <Text style={[styles.statusText, review.status === "Disetujui" && styles.approvedText, review.status === "Revisi" && styles.revisionText, review.status === "Menunggu" && styles.pendingText]}>{review.status}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Image source={require("./assets/Lingkaran.png")} style={styles.stickyCircle} />

      {selectedReview && (
        <Modal visible={isModalVisible} transparent={true} animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Ajuan Review</Text>

                <TouchableOpacity style={styles.closeButtonIcon} onPress={closeModal}>
                  <Image source={require("./assets/CloseButton.png")} style={styles.closeImage} />
                </TouchableOpacity>
              </View>

              <Text style={styles.reviewed}>{selectedReview.reviewed}</Text>
              <Text style={styles.message}>{selectedReview.message}</Text>
              <Text style={styles.date}>Tanggal: {selectedReview.date}</Text>
              <View style={styles.fileContainer}>
                <Image source={require("./assets/IkonDownload.png")} style={styles.fileIcon} />
                <Text style={styles.fileName}>{selectedReview.fileName}</Text>
              </View>
              <Text style={styles.modalLabel}>Tanggapan Anda:</Text>
              <TextInput style={styles.responseInput} placeholder="Tulis tanggapan Anda di sini" multiline />
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Kirim</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
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
  subtitle: {
    fontSize: 14,
    color: "#888",
    marginBottom: 40,
    paddingTop: 10,
    paddingLeft: 10,
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
  reviewed: {
    fontSize: 14,
    color: "#515151",
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    color: "#515151",
  },
  reviewedTextWhite: {
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
  },
  modalTitle: {
    color: "#63ABE6",
    fontSize: 20,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "#515151",
    marginTop: 10,
    marginBottom: 10,
  },
  fileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  fileIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  fileName: {
    fontSize: 14,
    color: "#515151",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  modalLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  responseInput: {
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 10,
    padding: 10,
    height: 100,
    textAlignVertical: "top",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#63ABE6",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  closeButtonIcon: {
    alignItems: "flex-end",
    marginBottom: 10,
  },
  closeImage: {
    width: 25,
    height: 25,
  },
});

export default ReviewDosen;