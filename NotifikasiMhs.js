import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

const NotifikasiMhs = () => {
  return (
    <View style={styles.container2}>
      <Text style={styles.subtitle}>Atur notifikasi yang ingin kamu terima disini</Text>
      <ScrollView style={styles.scrollContent}>
        <View style={styles.scrollView}>
          <View style={styles.notificationContainerTitle}>
            <View style={styles.textContainer}>
              <Text style={styles.notificationTitle}>Review Masuk</Text>
              <Text style={styles.notificationTitle2}>Dari Joko, S.Kom., M.T.</Text>
            </View>
            <Image source={require("./assets/IkonNotif.png")} style={styles.menuIconNotif} />
          </View>
          <View style={styles.notificationContainer}>
            <View style={styles.notificationMessage}>
              <Text style={styles.notificationText}>“udah bagus untuk bab II nya tapi perbaiki lagi kata katanya menjadi baku dan bahasa indonesia”</Text>
            </View>
          </View>

          <View style={styles.notificationContainerTitle}>
            <View>
              <Text style={styles.notificationTitle}>Ada Janji Temu Nih</Text>
              <Text style={styles.notificationTitle2}>Dengan Joko, S.Kom., M.T.</Text>
            </View>
            <Image source={require("./assets/IkonNotif2.png")} style={styles.menuIconNotif} />
          </View>
          <View style={styles.notificationContainer}>
            <View style={styles.notificationMessage}>
              <Text style={styles.notificationText}>24 April 2024</Text>
              <Text style={styles.notificationText}>At 10:00 - 12:00 AM</Text>
            </View>
          </View>

          <View style={styles.notificationContainerTitle}>
            <View>
              <Text style={styles.notificationTitle}>Review Masuk</Text>
              <Text style={styles.notificationTitle2}>Dengan Joko, S.Kom., M.T.</Text>
            </View>
            <Image source={require("./assets/IkonNotif.png")} style={styles.menuIconNotif} />
          </View>
          <View style={styles.notificationContainer}>
            <View style={styles.notificationMessage}>
              <Text style={styles.notificationText}>”Dan jangan lupa untuk kerjakan BAB III nya”</Text>
            </View>
          </View>

          <View style={styles.notificationContainerTitle}>
            <View style={styles.textContainer}>
              <Text style={styles.notificationTitle}>Review Masuk</Text>
              <Text style={styles.notificationTitle2}>Dari Joko, S.Kom., M.T.</Text>
            </View>
            <Image source={require("./assets/IkonNotif.png")} style={styles.menuIconNotif} />
          </View>
          <View style={styles.notificationContainer}>
            <View style={styles.notificationMessage}>
              <Text style={styles.notificationText}>“udah bagus untuk bab II nya tapi perbaiki lagi kata katanya menjadi baku dan bahasa indonesia”</Text>
            </View>
          </View>

          <View style={styles.notificationContainerTitle}>
            <View>
              <Text style={styles.notificationTitle}>Ada Janji Temu Nih</Text>
              <Text style={styles.notificationTitle2}>Dengan Joko, S.Kom., M.T.</Text>
            </View>
            <Image source={require("./assets/IkonNotif2.png")} style={styles.menuIconNotif} />
          </View>
          <View style={styles.notificationContainer}>
            <View style={styles.notificationMessage}>
              <Text style={styles.notificationText}>24 April 2024</Text>
              <Text style={styles.notificationText}>At 10:00 - 12:00 AM</Text>
            </View>
          </View>

          <View style={styles.notificationContainerTitle}>
            <View>
              <Text style={styles.notificationTitle}>Review Masuk</Text>
              <Text style={styles.notificationTitle2}>Dengan Joko, S.Kom., M.T.</Text>
            </View>
            <Image source={require("./assets/IkonNotif.png")} style={styles.menuIconNotif} />
          </View>
          <View style={styles.notificationContainer}>
            <View style={styles.notificationMessage}>
              <Text style={styles.notificationText}>”Dan jangan lupa untuk kerjakan BAB III nya”</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: "#FFF",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginTop: 8,
    paddingTop: 10,
  },
  scrollView: {
    marginTop: 10,
  },
  notificationContainerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#63ABE6",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  notificationContainer: {
    backgroundColor: "#fff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 5,
    paddingBottom: 5,
    shadowColor: "black",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
  notificationTitle2: {
    fontSize: 12,
    color: "#FFF",
  },
  notificationMessage: {
    padding: 5,
  },
  notificationText: {
    fontSize: 14,
    color: "#515151",
    marginLeft: 10,
  },
  menuIconNotif: {
    width: 24,
    height: 24,
  },
});

export default NotifikasiMhs;
