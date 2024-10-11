import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native'; 

const RiwayatMhs = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [showDropdown, setShowDropdown] = useState(false);

  // Data untuk container pertama
  const [data, setData] = useState([
    {
      date: '1 Mei 2024',
      title: 'Pengajuan Bab 3',
      pembimbing: 'Dosen Pembimbing 1',
      kategori: 'Luring',
    },
    {
      date: '18 April 2024',
      title: 'Revisi Bab 2',
      pembimbing: 'Dosen Pembimbing 2',
      kategori: 'Daring',
    },
  ]);

  // Data untuk container baru yang bisa diubah terpisah
  const [dataNewContainer, setDataNewContainer] = useState([
    {
      date: '16 April 2024',
      title: 'Pengajuan Bab 2',
      pembimbing: 'BAB II M Fakhri Rizqullah',
      kategori: 'Daring',
    },
    {
      date: '25 April 2024',
      title: 'Revisi Bab I',
      pembimbing: 'BAB II M Fakhri Rizqullah',
      kategori: 'Daring',
    },
    {
      date: '30 April 2024',
      title: 'Revisi Bab I',
      pembimbing: 'BAB II M Fakhri Rizqullah',
      kategori: 'Daring',
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
    if (pembimbing === 'Dosen Pembimbing 1') {
      return '#2D9596'; // Green for Dosen Pembimbing 1
    } else if (pembimbing === 'Dosen Pembimbing 2') {
      return '#663399'; // Orange for Dosen Pembimbing 2
    }
    return '#3498DB'; // Default Blue for others
  };

  const getKategoriColor = (kategori) => {
    if (kategori === 'Luring') {
      return '#FFE570'; // Yellow for Luring
    } else if (kategori === 'Daring') {
      return '#9AE97F'; // Green for Daring
    }
    return '#34495E'; // Default Gray for others
  };

  const combinedData = selectedFilter === 'All'
    ? [...data, ...dataNewContainer]
    : [...data, ...dataNewContainer].filter(item => item.kategori === selectedFilter);

  return (
    <View style={styles.container}>

      {/* Riwayat & Filter */}
      <View style={styles.filterContainer}>
        <Text style={styles.riwayatText}>Riwayat</Text>
        <TouchableOpacity style={styles.filterButton} onPress={toggleDropdown}>
          <Text style={styles.filterText}>{selectedFilter}</Text>
          <Ionicons name={showDropdown ? "chevron-up" : "chevron-down"} size={16} color="black" style={styles.dropdownIcon} />
        </TouchableOpacity>
        {showDropdown && (
          <View style={styles.dropdown}>
            <TouchableOpacity onPress={() => selectFilter('All')}>
              <Text style={styles.dropdownText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.luringButton} onPress={() => selectFilter('Luring')}>
              <Text style={styles.luringText}>Luring</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.daringButton} onPress={() => selectFilter('Daring')}>
              <Text style={styles.daringText}>Daring</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* TimelineCard */}
      <FlatList
        data={combinedData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <View style={styles.cardContent}>
              <Text style={styles.dateText}>{item.date}</Text>
              <Text style={styles.titleText}>{item.title}</Text>
              <View style={styles.tagContainer}>
                {/* Render different styles for container 2 */}
                {item.pembimbing.includes('M') ? (
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

            {/* Download Section */}
            <TouchableOpacity onPress={() => console.log('Kartu Konsul diklik')}>
              <View style={styles.downloadBox}>
                <Ionicons name="download" size={20} color="#63ABE6" />
                <Text style={styles.downloadText}>Kartu Konsul</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 15,
  },
  riwayatText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  filterButton: {
    marginLeft: 10,
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    fontSize: 14,
    marginRight: 5, // Add some margin to the right of the text
  },
  dropdownIcon: {
    marginLeft: 5, // Space between text and icon
  },
  dropdown: {
    position: 'absolute',
    top: 40,
    left: 70,
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Transparan putih
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#ccc',
    width: 90,
    zIndex: 10,
    alignItems: 'center',
  },
  dropdownText: {
    padding: 10,
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderRadius: 20,
    margin: 5,
  },
  luringButton: {
    backgroundColor: 'rgba(255, 229, 112, 0.9)', // Transparan kuning untuk Luring
    padding: 12,
    borderBottomWidth: 1,
    borderRadius: 15,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    margin: 5,
  },
  luringText: {
    fontSize: 14,
    color: '#000', // Teks hitam
  },
  daringButton: {
    backgroundColor: 'rgba(154, 233, 127, 0.9)', // Transparan hijau untuk Daring
    padding: 12,
    borderRadius: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    margin: 5,
  },
  daringText: {
    fontSize: 14,
    color: '#000', // Teks hitam
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#63ABE6',
    padding: 20,
    borderRadius: 20,
    margin: 10,
    position: 'relative',
    shadowColor: '#000', // Warna shadow (hitam)
    shadowOpacity: 0.5,  // Tingkat transparansi bayangan (0.1 sampai 1)
    shadowRadius: 5,     // Ukuran blur bayangan
    shadowOffset: { width: 0, height: 5 },  // Posisi bayangan
    elevation: 10, // Tingkat ketinggian untuk bayangan di Android
  },
  cardContent: {
    flex: 2,
  },
  dateText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleText: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 5,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    color: '#fff', // Ganti warna teks default menjadi putih
  },
  blackText: {
    color: '#000', // Ganti warna teks menjadi hitam
  },
  container2Tag: {
    flexDirection: 'row',
    alignItems: 'center',
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
    color: '#FFFFFF',
  },
  underlineText: {
    textDecorationLine: 'underline', // Menambahkan garis bawah
  },
  downloadContainer: {
    position: 'absolute',
    top: 20,
    right: 10,
  },
  downloadBox: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 3,
    paddingVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  downloadText: {
    color: '#63ABE6',
    marginLeft: 5,
    fontSize: 12,
  },
});

export default RiwayatMhs;