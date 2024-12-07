import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, TextInput, Image } from "react-native";
import { db } from "./firebaseConfig";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";

const ReviewDosen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [response, setResponse] = useState("");
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

  const openModal = (review) => {
    setSelectedReview(review);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedReview(null);
    setResponse("");
  };

  const submitResponse = async () => {
    if (response) {
      const reviewRef = doc(db, "reviews", selectedReview.id);
      await updateDoc(reviewRef, {
        status: "Disetujui",
        response: response,
      });
      closeModal();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Periksa ajuan review dari mahasiswa bimbingan</Text>

      <Text style={styles.sectionTitle}>Ajuan Review</Text>
      <ScrollView>
        {reviews.map((review) => (
          <TouchableOpacity key={review.id} onPress={() => openModal(review)} disabled={review.status !== "Menunggu"}>
            <View style={[styles.reviewCard, review.status === "Menunggu" && styles.pendingBackground, (review.status === "Disetujui" || review.status === "Revisi") && styles.approvedBackground]}>
              <Text style={[styles.reviewTitle, (review.status === "Disetujui" || review.status === "Revisi") && styles.reviewedTextWhite]}>{review.status === "Menunggu" ? "Ajuan Review" : "Telah Review"}</Text>
              <Text style={[styles.reviewer, (review.status === "Disetujui" || review.status === "Revisi") && styles.reviewedTextWhite]}>{review.mahasiswa}</Text>
              <Text style={[styles.reviewer, (review.status === "Disetujui" || review.status === "Revisi") && styles.reviewedTextWhite]}>Kepada: {review.reviewer}</Text>
              <Text style={[styles.message, (review.status === "Disetujui" || review.status === "Revisi") && styles.reviewedTextWhite]}>{review.description}</Text>
              <View style={styles.statusBadge}>
                <Text style={[styles.statusText, review.status === "Disetujui" && styles.approvedText, review.status === "Revisi" && styles.revisionText, review.status === "Menunggu" && styles.pendingText]}>{review.status}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Ajuan Review</Text>

            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Image source={require("./assets/CloseButton.png")} style={styles.closeButtonImage} />
            </TouchableOpacity>

            <Text style={styles.reviewer}> {selectedReview?.reviewer}</Text>
            <Text style={styles.subject}>{selectedReview?.subject}</Text>
            <Text style={styles.message}>{selectedReview?.description}</Text>

            <Text style={styles.modalLabel}>Tanggapan Anda:</Text>
            <TextInput style={styles.responseInput} placeholder="Tulis tanggapan Anda di sini" value={response} onChangeText={setResponse} multiline />

            <TouchableOpacity style={styles.submitButton} onPress={submitResponse}>
              <Text style={styles.submitButtonText}>Kirim Tanggapan</Text>
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
  reviewer: {
    fontSize: 14,
    color: "#515151",
    marginBottom: 10,
  },
  subject: {
    fontSize: 14,
    color: "#515151",
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    color: "#515151",
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
    backgroundColor: "#fff",
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
    width: "90%",
  },
  modalTitle: {
    color: "#63ABE6",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20,
  },
  modalLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
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
  submitButton: {
    backgroundColor: "#63ABE6",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  closeButton: {
    position: "absolute",
    top: 15,
    right: 20,
  },
  closeButtonImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});

export default ReviewDosen;
