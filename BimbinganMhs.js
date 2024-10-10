// BimbinganMhs
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ProgressBar } from 'react-native-paper';

const BimbinganMhs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Image source={require('./assets/icon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Bimbingan</Text>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.greetingText}>Hi, <Text style={styles.nameText}>Fakhri</Text></Text>
        <Text style={styles.subText}>Gimana proses skripsi mu?</Text>

        {/* Progress Bar dan Gambar dengan Border Bersama */}
        <View style={styles.progressBarWrapper}>
          <View style={styles.progressContainer}>
            <Image
              source={require("./assets/fotoprofil.png")}
              style={styles.skripsiIcon}
            />
            <View style={styles.textWrapper}>
              <Text style={styles.progressText}>55% Skripsi Telah Dikerjakan</Text>
              <ProgressBar progress={0.55} color="#FBC02D" style={styles.progressBar} />
            </View>
          </View>
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Janji Temu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Review</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Riwayat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  header: {
    height: 60,
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  backBtn: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  headerTitle: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 0,
    },
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileNIM: {
    fontSize: 14,
    color: '#666666',
  },
  profileDosen: {
    fontSize: 14,
    color: '#666666',
  },
  profileArrow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  footer: {
    height: 60,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
  },
  footerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerIcon: {
    width: 24,
    height: 24,
  },
  footerText: {
    fontSize: 12,
    color: '#666666',
  },
});

export default BimbinganMhs;
