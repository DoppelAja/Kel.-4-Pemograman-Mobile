import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Switch, TouchableOpacity } from "react-native";

const AkunMhs = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("DataDiri");

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={[styles.profileContainer, isDarkMode && styles.darkProfileContainer]}>
        <Image source={require("./assets/KakFakhri.png")} style={styles.profileImage} />
        <Text style={[styles.name, isDarkMode && styles.darkText]}>M. Fakhri Rizqullah</Text>
        <Text style={[styles.email, isDarkMode && styles.darkText]}>fakhri@gmail.com</Text>
      </View>

      {/* Navbar */}
      <View style={[styles.navbar, isDarkMode && styles.darkNavbar]}>
        <TouchableOpacity style={[styles.navButton, activeTab === "DataDiri" && styles.activeTab]} onPress={() => setActiveTab("DataDiri")}>
          <Text style={[styles.navText, activeTab === "DataDiri" && styles.activeText, isDarkMode && styles.darkJudulLabel]}>Data Diri</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navButton, activeTab === "Pengaturan" && styles.activeTab]} onPress={() => setActiveTab("Pengaturan")}>
          <Text style={[styles.navText, activeTab === "Pengaturan" && styles.activeText, isDarkMode && styles.darkJudulLabel]}>Pengaturan</Text>
        </TouchableOpacity>
      </View>

      {/* Konten */}
      <ScrollView style={styles.content}>
        {activeTab === "DataDiri" ? (
          <View style={styles.dataDiri}>
            <Text style={[styles.judul_label, isDarkMode && styles.darkJudulLabel]}>Nama Lengkap:</Text>
            <Text style={[styles.label, isDarkMode && styles.darkLabel]}>M. Fakhri Rizqullah</Text>
            <Text style={[styles.judul_label, isDarkMode && styles.darkJudulLabel]}>Email:</Text>
            <Text style={[styles.label, isDarkMode && styles.darkLabel]}>fakhri@gmail.com</Text>
            <Text style={[styles.judul_label, isDarkMode && styles.darkJudulLabel]}>NIM:</Text>
            <Text style={[styles.label, isDarkMode && styles.darkLabel]}>09031382126006</Text>
            <Text style={[styles.judul_label, isDarkMode && styles.darkJudulLabel]}>Program Studi:</Text>
            <Text style={[styles.label, isDarkMode && styles.darkLabel]}>Sistem Informasi</Text>
            <Text style={[styles.judul_label, isDarkMode && styles.darkJudulLabel]}>Angkatan:</Text>
            <Text style={[styles.label, isDarkMode && styles.darkLabel]}>2021</Text>
          </View>
        ) : (
          <View style={styles.pengaturan}>
            <View style={styles.settingRow}>
              <Text style={[styles.label, isDarkMode && styles.darkLabel]}>Dark Mode</Text>
              <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
            </View>
            <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate("HLogin")}>
              <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  darkContainer: {
    backgroundColor: "#212F45",
  },
  profileContainer: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  darkProfileContainer: {
    backgroundColor: "#2B3A55",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#000",
  },
  email: {
    fontSize: 16,
    color: "#555",
  },
  darkText: {
    color: "#ffffff",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  darkNavbar: {
    backgroundColor: "#2B3A55",
    borderColor: "#000",
  },
  navButton: {
    padding: 10,
    flex: 1,
    alignItems: "center",
  },
  navText: {
    fontSize: 16,
    color: "#555",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#007bff",
  },
  activeText: {
    color: "#007bff",
    fontWeight: "bold",
  },
  darkactiveText: {
    color: "#007bff",
    fontWeight: "bold",
  },
  content: {
    padding: 20,
  },
  dataDiri: {
    marginTop: 10,
  },
  pengaturan: {
    marginTop: 10,
  },
  judul_label: {
    color: "#3470A2",
    fontWeight: "bold",
  },
  darkJudulLabel: {
    color: "#87CEFA",
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
    color: "#333",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  darkLabel: {
    color: "#FFFFFF",
    borderColor: "#555",
    backgroundColor: "#2B3A55",
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: "#ff4d4d",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  darkLogoutButton: {
    backgroundColor: "#e74c3c",
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AkunMhs;
