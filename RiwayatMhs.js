import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RiwayatMhs = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [showDropdown, setShowDropdown] = useState(false);

  const [data, setData] = useState([
    {
      date: "1 Mei 2024",
      title: "Pengajuan Bab 3",
      pembimbing: "Dosen Pembimbing 1",
      kategori: "Luring",
    },
    {
      date: "18 April 2024",
      title: "Revisi Bab 2",
      pembimbing: "Dosen Pembimbing 2",
      kategori: "Luring",
    },
  ]);

  const [dataNewContainer, setDataNewContainer] = useState([
    {
      date: "16 April 2024",
      title: "Pengajuan Bab 2",
      pembimbing: "BAB II M Fakhri Rizqullah",
      kategori: "Daring",
    },
    {
      date: "25 April 2024",
      title: "Revisi Bab I",
      pembimbing: "BAB I M Fakhri Rizqullah",
      kategori: "Daring",
    },
    {
      date: "30 April 2024",
      title: "Revisi Bab I",
      pembimbing: "BAB I M Fakhri Rizqullah",
      kategori: "Daring",
    },
  ]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const selectFilter = (filter) => {
    setSelectedFilter(filter);
    setShowDropdown(false);
  };

  const getPembimbingColor = (pembimbing) => {
    if (pembimbing === "Dosen Pembimbing 1") {
      return "#2D9596";
    } else if (pembimbing === "Dosen Pembimbing 2") {
      return "#663399";
    }
    return "#3498DB";
  };

  const getKategoriColor = (kategori) => {
    if (kategori === "Luring") {
      return "#FFE570";
    } else if (kategori === "Daring") {
      return "#9AE97F";
    }
    return "#34495E";
  };

  const combinedData = selectedFilter === "All" ? [...data, ...dataNewContainer] : [...data, ...dataNewContainer].filter((item) => item.kategori === selectedFilter);

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Text style={styles.riwayatText}>Riwayat</Text>
        <TouchableOpacity style={styles.filterButton} onPress={toggleDropdown}>
          <Text style={styles.filterText}>{selectedFilter}</Text>
          <Ionicons name={showDropdown ? "chevron-up" : "chevron-down"} size={16} color="black" style={styles.dropdownIcon} />
        </TouchableOpacity>
        {showDropdown && (
          <View style={styles.dropdown}>
            <TouchableOpacity onPress={() => selectFilter("All")}>
              <Text style={styles.dropdownText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.luringButton} onPress={() => selectFilter("Luring")}>
              <Text style={styles.luringText}>Luring</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.daringButton} onPress={() => selectFilter("Daring")}>
              <Text style={styles.daringText}>Daring</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <FlatList
        data={combinedData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <View style={styles.cardContent}>
              <Text style={styles.dateText}>{item.date}</Text>
              <Text style={styles.titleText}>{item.title}</Text>
              <View style={styles.tagContainer}>
                {item.pembimbing.includes("M") ? (
                  <View style={styles.container2Tag}>
                    <Ionicons name="folder" size={20} color="#FFFFFF" style={styles.iconFolder} />
                    <Text style={[styles.tagTextContainer2, styles.underlineText]}>{item.pembimbing}</Text>
                  </View>
                ) : (
                  <View style={[styles.supervisorTag, { backgroundColor: getPembimbingColor(item.pembimbing) }]}>
                    <Text style={[styles.tagText, styles.underlineText]}>{item.pembimbing}</Text>
                  </View>
                )}
                <View style={[styles.methodTag, { backgroundColor: getKategoriColor(item.kategori) }]}>
                  <Text style={[styles.tagText, styles.blackText]}>{item.kategori}</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity onPress={() => console.log("Kartu Konsul diklik")}>
              <View style={styles.downloadBox}>
                <Ionicons name="download" size={20} color="#63ABE6" />
                <Text style={styles.downloadText}>Kartu Konsul</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
      <Image source={require("./assets/Lingkaran.png")} style={styles.stickyCircle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 40,
  },
  headerText: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold",
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 15,
  },
  riwayatText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  filterButton: {
    marginLeft: 10,
    padding: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  filterText: {
    fontSize: 14,
    marginRight: 5,
  },
  dropdownIcon: {
    marginLeft: 5,
  },
  dropdown: {
    position: "absolute",
    top: 40,
    left: 70,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#ccc",
    width: 90,
    zIndex: 10,
    alignItems: "center",
  },
  dropdownText: {
    padding: 10,
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderRadius: 20,
    margin: 5,
  },
  luringButton: {
    backgroundColor: "rgba(255, 229, 112, 0.9)",
    padding: 12,
    borderBottomWidth: 1,
    borderRadius: 15,
    borderBottomColor: "#ccc",
    alignItems: "center",
    margin: 5,
  },
  luringText: {
    fontSize: 14,
    color: "#000",
  },
  daringButton: {
    backgroundColor: "rgba(154, 233, 127, 0.9)",
    padding: 12,
    borderRadius: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "center",
    margin: 5,
  },
  daringText: {
    fontSize: 14,
    color: "#000",
  },
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "#63ABE6",
    padding: 20,
    borderRadius: 20,
    margin: 10,
    position: "relative",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
    elevation: 10,
  },
  cardContent: {
    flex: 2,
  },
  dateText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  titleText: {
    color: "#fff",
    fontSize: 16,
    marginVertical: 5,
  },
  tagContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  supervisorTag: {
    borderRadius: 19,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  methodTag: {
    borderRadius: 19,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  tagText: {
    fontSize: 12,
    color: "#fff",
  },
  blackText: {
    color: "#000",
  },
  container2Tag: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  iconFolder: {
    marginRight: 5,
  },
  tagTextContainer2: {
    fontSize: 12,
    color: "#FFFFFF",
  },
  underlineText: {
    textDecorationLine: "underline",
  },
  downloadContainer: {
    position: "absolute",
    top: 20,
    right: 10,
  },
  downloadBox: {
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 3,
    paddingVertical: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  downloadText: {
    color: "#63ABE6",
    marginLeft: 5,
    fontSize: 12,
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
});

export default RiwayatMhs;