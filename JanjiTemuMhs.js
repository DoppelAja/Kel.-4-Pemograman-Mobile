import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const JanjiTemuMhs= () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Janji Temu</Text>
      <Text style={styles.subtitle}>
        Tentukan Janji Temu anda dengan dosen pembimbing pilihan
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ketersediaan Dosen</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buat Janji Temu</Text>
        </TouchableOpacity>

        {/* Dosen Pembimbing 1 */}
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} // Ganti dengan gambar dosen
          />
          <View style={styles.cardContent}>
            <Text style={styles.lecturerName}>Dosen Pembimbing 1</Text>
            <Text style={styles.lecturerTitle}>Joko, S.Kom., M.T</Text>
          </View>
          <View style={styles.statusContainer}>
            <Text style={styles.statusAvailable}>Ada</Text>
          </View>
        </View>

        {/* Dosen Pembimbing 2 */}
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{ uri: 'https://randomuser.me/api/portraits/women/2.jpg' }} // Ganti dengan gambar dosen
          />
          <View style={styles.cardContent}>
            <Text style={styles.lecturerName}>Dosen Pembimbing 2</Text>
            <Text style={styles.lecturerTitle}>Clara, S.Kom., M.Kom</Text>
          </View>
          <View style={styles.statusContainer}>
            <Text style={styles.statusNotAvailable}>Tidak Ada</Text>
          </View>
        </View>
      </View>

      {/* Daftar Janji Temu */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Daftar Janji Temu</Text>
        <View style={styles.appointmentCard}>
          <Text style={styles.date}>24{'\n'}April{'\n'}2024</Text>
          <View style={styles.appointmentDetails}>
            <Text style={styles.lecturerTitle}>Joko, S.Kom., M.T</Text>
            <Text style={styles.appointmentText}>
              Janji temu untuk menyelesaikan progress skripsi
            </Text>
          </View>
        </View>

        <View style={styles.appointmentCard}>
          <Text style={styles.date}>30{'\n'}April{'\n'}2024</Text>
          <View style={styles.appointmentDetails}>
            <Text style={styles.lecturerTitle}>Clara, S.Kom., M.Kom</Text>
            <Text style={styles.appointmentText}>
              Janji temu untuk menyelesaikan progress skripsi BAB II
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F9',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 8,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5DA7DB',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    elevation: 3,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  cardContent: {
    marginLeft: 10,
    flex: 1,
    padding: 10.
    
  },
  lecturerName: {
    fontSize: 14,
    color: '#000000',
    
  },
  lecturerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusContainer: {
    justifyContent: 'center',
  },
  statusAvailable: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  statusNotAvailable: {
    backgroundColor: '#FF5252',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  appointmentCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    elevation: 3,
  },
  date: {
    backgroundColor: '#3470A2',
    color: '#fff',
    padding: 20,
    borderRadius: 12,
    fontWeight: 'bold',
    fontSize: 18,
  },
  appointmentDetails: {
    marginLeft: 10,
    flex: 1,
  },
  appointmentText: {
    fontSize: 14,
    color: '#555',
  },
});

export default JanjiTemuMhs;
