// DashboardMahasiswa
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const DashboardMhs = () => {

  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./assets/BackBimbingan.png')} resizeMode="cover" style={styles.BackPage}>
      <View style={styles.headerContainer}>

        <TextInput style={styles.input} placeholder="Masukkan kata pencarian" value={searchText} onChangeText={(text) => setSearchText(text)} />
        
        <TouchableOpacity onPress={() => navigation.navigate('Notifikasi Mahasiswa')}>
          <Image
            source={require("./assets/notif.png")}
            style={styles.notificationIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Kartu progress */}
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

      {/* Menu Bimbingan, Janji Temu, dan Review dalam Bentuk Gambar */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Bimbingan Mahasiswa')}>
          <View style={styles.iconBorder}>
            <Image
              source={require('./assets/bimbingan.png')} // Ganti dengan path gambar Bimbingan
              style={styles.menuIcon}
            />
          </View>
          <Text style={styles.menuText}>Bimbingan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Bimbingan Mahasiswa')}>
          <View style={styles.iconBorder}>
            <Image
              source={require('./assets/janjitemu.png')} // Ganti dengan path gambar Janji Temu
              style={styles.menuIcon}
            />
          </View>
          <Text style={styles.menuText}>Janji Temu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Bimbingan Mahasiswa')}>
          <View style={styles.iconBorder}>
            <Image
              source={require('./assets/review.png')} // Ganti dengan path gambar Review
              style={styles.menuIcon}
            />
          </View>
          <Text style={styles.menuText}>Review</Text>
        </TouchableOpacity>
      </View>

      {/* Review Section */}
      <View style={styles.notificationContainerTitle}>
        <Text style={styles.notificationTitle}>Review Masuk</Text>
        <Text style={styles.notificationTitle2}>Dari Joko, S.Kom., M.T.</Text>
      </View>
      <View style={styles.notificationContainer}>
        <View style={styles.notificationMessage}>
          <Text style={styles.notificationText}>Anda memiliki 3 notifikasi baru!</Text>
          <Text style={styles.notificationText}>Bimbingan Anda dijadwalkan besok.</Text>
          <Text style={styles.notificationText}>Janji temu dengan dosen telah dikonfirmasi.</Text>
          <Text style={styles.notificationText}>Tugas baru telah ditambahkan.</Text>
        </View>
      </View>

      {/* Notifikasi Tambahan */}
      <View style={styles.notificationContainerTitle}>
        <Text style={styles.notificationTitle}>Ada Janji Temu Nih</Text>
        <Text style={styles.notificationTitle2}>Dengan Joko, S.Kom., M.T.</Text>
      </View>
      <View style={styles.notificationContainer}>
        <View style={styles.notificationMessage}>
          <Text style={styles.notificationText}>Pengingat: Serahkan tugas sebelum akhir minggu.</Text>
          <Text style={styles.notificationText}>Anda telah menerima umpan balik untuk tugas terakhir.</ Text>
          <Text style={styles.notificationText}>Jadwal seminar telah diperbarui.</Text>
        </View>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      // paddingHorizontal: 20,
      backgroundColor: "#FFFFFF",
    },
    BackPage: {
      flex: 1,
    },
    headerContainer: {
      paddingHorizontal: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    input: {
      flex: 1,
      height: 40,
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: 30,
      paddingHorizontal: 10,
      marginRight: 10,
      marginTop: 30,
    },
    notificationIcon: {
      width: 30,
      height: 30,
      marginTop: 30,
    },
    cardContainer: {
      marginHorizontal: 20,
      backgroundColor: "#4682B4",
      borderRadius: 25,
      padding: 20,
      marginTop: 10,
      elevation: 5,
  
    },
    greetingText: {
      fontSize: 50,
      fontWeight: "bold",
      color: "#fff",
    },
    nameText: {
      color: "#FFC107",
    },
    subText: {
      color: "#E0F7FA",
      marginBottom: 20,
    },
    progressBarWrapper: {
      borderWidth: 2,
      borderColor: "#4682B4",
      borderRadius: 30,
      padding: 8,
      backgroundColor: "rgba(255, 255, 255, 0.6)",
    },
    progressContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    skripsiIcon: {
      width: 50,
      height: 50,
      marginRight: 10,
      borderWidth: 2,
      borderColor: "#fff",
      borderRadius: 30,
    },
    textWrapper: {
      flex: 1,
    },
    progressText: {
      color: "#fff",
      marginBottom: 5,
    },
    progressBar: {
      height: 12,
      borderRadius: 5,
    },
    menuContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 20,
    },
    menuItem: {
      alignItems: "center",
    },
    iconBorder: {
      borderWidth: 2,
      borderColor: "#A9A9A9", // Warna border sesuai keinginan
      borderRadius: 20,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 5, // Jarak antara ikon dan teks
    },
    menuIcon: {
      width: 60,  // Ubah ukuran sesuai kebutuhan
      height: 60, // Ubah ukuran sesuai kebutuhan
    },
    menuText: {
      color: "#A9A9A9",
    },
    notificationContainerTitle: {
      // Gaya untuk title notifikasi
      marginHorizontal: 20,
      backgroundColor: '#4682B4', // Contoh warna latar belakang
      padding: 10,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      marginTop:20,
    },
    notificationTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    notificationTitle2: {
      fontSize: 14,
      color: '#FFFFFF',
    },
    notificationContainer: {
      // Gaya untuk container notifikasi
      marginHorizontal: 20,
      backgroundColor: '#f8f8f8', // Contoh warna latar belakang
      borderRadius: 15,
      padding: 10,
      marginBottom: 20, // Jarak antar container notifikasi
    },
    notificationMessage: {
      // Gaya untuk pesan notifikasi
    },
    notificationText: {
      // Gaya untuk teks notifikasi
      fontSize: 14,
      marginBottom: 1, // Jarak antar teks notifikasi
    },
  });

export default DashboardMhs;
