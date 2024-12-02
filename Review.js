import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, SafeAreaView } from 'react-native';

const ReviewScreen = () => {
  const reviews = [
    {
      id: 1,
      reviewer: "Joko, S.Kom., M.T",
      message: "Skripsimu sudah tepat sekali, menyala abangkuh!!!",
      status: "Disetujui",
    },
    {
      id: 2,
      reviewer: "Joko, S.Kom., M.T",
      message: "Latar belakangnya pake CHATGPT ya nak?",
      status: "Revisi",
    },
    {
      id: 3,
      reviewer: "Clara, S.Kom., M.Kom",
      message: "Berikut bab I saya bu, mohon dikoreksi. Terima kasih sebelumnya",
      status: "Menunggu",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./assets/BackBimbingan.png')} resizeMode="cover" style={styles.backgroundImage}>
        <View style={styles.content}>
          <Text style={styles.title}>Review</Text>
          <Text style={styles.subtitle}>
            Beritahu dosenmu jika kamu ingin mensubmit review progress skripsimu
          </Text>

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Ajukan Review Baru</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Ajuan Review</Text>

          <ScrollView>
            {reviews.map((review) => (
              <View
                key={review.id}
                style={[
                  styles.reviewCard,
                  review.status === "Disetujui" && styles.approvedBackground,
                  review.status === "Revisi" && styles.revisionBackground,
                  review.status === "Menunggu" && styles.pendingBackground,
                ]}
              >
                <Text style={[
                    styles.reviewTitle, 
                    review.status === "Disetujui" && styles.approvedText,
                    review.status === "Revisi" && styles.revisionText,
                    review.status === "Menunggu" && styles.pendingText
                ]}>Hasil Review</Text>
                <Text style={styles.reviewer}>{review.reviewer}</Text>
                <Text style={styles.message}>{review.message}</Text>
                <View style={styles.statusBadge}>
                  <Text style={[
                      styles.statusText,
                      review.status === "Disetujui" && styles.approvedText,
                      review.status === "Revisi" && styles.revisionText,
                      review.status === "Menunggu" && styles.pendingText
                  ]}>{review.status}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 60,
  },
  submitButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  reviewCard: {
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    position: 'relative',
  },
  reviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reviewer: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    color: '#fff',
  },
  statusBadge: {
    position: 'absolute',
    top: 15,
    right: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  statusText: {
    fontWeight: 'bold',
  },
  approvedBackground: {
    backgroundColor: '#4A90E2',
  },
  revisionBackground: {
    backgroundColor: '#4A90E2',
  },
  pendingBackground: {
    backgroundColor: '#4A90E2',
  },
  approvedText: {
    color: '#56D288',
  },
  revisionText: {
    color: '#FF6EB4',
  },
  pendingText: {
    color: '#FFDD57',
  },
});

export default ReviewScreen;