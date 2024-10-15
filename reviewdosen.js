import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Modal, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const App = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Joko, S.Kom., M.T",
      status: "Disetujui",
      review: "Skripsimu sudah tepat sekali, menyala abangku!!!",
      bgColor: "approved"
    },
    {
      id: 2,
      name: "Joko, S.Kom., M.T",
      status: "Revisi",
      review: "Latar belakangnya pake CHATGPT ya nak?",
      bgColor: "revised"
    },
    {
      id: 3,
      name: "Clara, S.Kom., M.Kom",
      status: "Menunggu",
      review: "Berikut bab I saya bu, mohon dikoreksi. Terima kasih sebelumnya",
      bgColor: "pending"
    }
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    review: '',
    status: 'Menunggu',
  });

  const handleAddReview = () => {
    setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
    setModalVisible(false);
    setNewReview({
      name: '',
      review: '',
      status: 'Menunggu',
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <Text style={styles.paragraph}>
        Beritahu dosenmu jika kamu ingin mensubmit review progress skripsimu
      </Text>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => setModalVisible(true)}
      >
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/ffffff/plus.png' }}
          style={styles.submitIcon}
        />
        <Text style={styles.submitButtonText}>Ajukan Review Baru..</Text>
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>Ajuan Review</Text>
      <ReviewList reviews={reviews} />

      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Ajukan Review</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButton}>×</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.inputLabel}>Dosen</Text>
            <Picker
              selectedValue={newReview.name}
              style={styles.modalPicker}
              onValueChange={(itemValue) => setNewReview({ ...newReview, name: itemValue })}
            >
              <Picker.Item label="Joko, S.Kom., M.T" value="Joko, S.Kom., M.T" />
              <Picker.Item label="Clara, S.Kom., M.Kom" value="Clara, S.Kom., M.Kom" />
            </Picker>

            
            <TouchableOpacity style={styles.fileUploadBox}>
              <Text style={styles.fileUploadText}>Tap to upload a file</Text>
            </TouchableOpacity>

            <TextInput
              style={styles.modalTextInput}
              placeholder="Ketikan Deskripsi Anda"
              multiline={true}
              numberOfLines={4}
              value={newReview.review}
              onChangeText={(text) => setNewReview({ ...newReview, review: text })}
            />

            <TouchableOpacity style={styles.modalButton} onPress={handleAddReview}>
              <Text style={styles.modalButtonText}>KIRIM</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const Header = () => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.backButton}>
      <Text style={styles.backButtonText}>←</Text>
    </TouchableOpacity>
    <Text style={styles.heading}>Review</Text>
  </View>
);

const ReviewList = ({ reviews }) => (
  <View style={styles.reviewList}>
    {reviews.map((review) => (
      <ReviewCard key={review.id} review={review} />
    ))}
  </View>
);

const ReviewCard = ({ review }) => (
  <View style={[styles.reviewCard, styles[review.bgColor]]}>
    <View style={styles.titleRow}>
      <Text style={[styles.reviewTitle, { color: review.bgColor === 'pending' ? 'black' : '#fff' }]}>
        Hasil Review
      </Text>
      <View style={[styles.statusBlock, styles[review.bgColor + 'Status']]}>
        <Text style={styles.statusText}>{review.status}</Text>
      </View>
    </View>
    <Text style={[styles.reviewerName, { color: review.bgColor === 'pending' ? 'black' : '#fff' }]}>{review.name}</Text>
    <Text style={[styles.reviewText, { color: review.bgColor === 'pending' ? 'black' : '#fff' }]}>{review.review}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'stretch',
    marginTop: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  backButton: {
    padding: 10,
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#333',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    flex: 1,
  },
  paragraph: {
    fontSize: 14,
    color: '#666',
    textAlign: 'left',
    marginBottom: 20,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    width: '100%',
    textAlign: 'left',
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4a90e2',
    borderRadius: 10,
    padding: 15,
    marginTop: 30,
    marginBottom: 30,
    width: '60%',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  submitIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewList: {
    width: '100%',
    alignItems: 'center',
  },
  reviewCard: {
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  reviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewerName: {
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
  },
  statusBlock: {
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
  statusText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
  reviewText: {
    marginTop: 10,
    textAlign: 'left',
  },
  approved: {
    backgroundColor: '#5DB1FF',
  },
  revised: {
    backgroundColor: '#5DB1FF',
  },
  pending: {
    backgroundColor: '#EEEEEE',
  },
  approvedStatus: {
    backgroundColor: '#008000',
  },
  revisedStatus: {
    backgroundColor: '#FF4500',
  },
  pendingStatus: {
    backgroundColor: '#FFD700',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 24,
    color: '#333',
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  fileUploadBox: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  fileUploadText: {
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
  },
  modalPicker: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  modalTextInput: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: '#4a90e2',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
