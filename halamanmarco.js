import React from "react";  
import {  
  SafeAreaView,  
  View,  
  Text,  
  TextInput,  
  TouchableOpacity,  
  ScrollView,  
  Image,  
  StyleSheet  
} from "react-native";  
import { Feather } from '@expo/vector-icons';  
  
const App = () => {  
  const [searchTerm, setSearchTerm] = React.useState('');  
  
  const handleSearch = (text) => {  
   setSearchTerm(text);  
  };  
  
  return (  
   <SafeAreaView style={styles.container}>  
    <ScrollView>  
      {/* Search Bar and Notification Icon */}  
      <View style={styles.headerContainer}>  
       <Text style={styles.time}>9:41</Text>  
       <TextInput  
        style={styles.searchBar}  
        placeholder="Masukkan kata pencarian"  
        value={searchTerm}  
        onChangeText={handleSearch}  
       />  
       <TouchableOpacity>  
        <Feather name="bell" size={24} color="#000" />  
       </TouchableOpacity>  
      </View>  
  
      {/* Greeting and Progress Section */}  
      <View style={styles.greetingContainer}>  
       <Text style={styles.greetingText}>Hi, Fakhri</Text>  
       <Text style={styles.subText}>Gimana proses skripsi mu?</Text>  
       <View style={styles.progressContainer}>  
        <Text style={styles.progressText}>55% Skripsi Telah Dikerjakan</Text>  
        <View style={styles.progressBarBackground}>  
          <View style={styles.progressBarFill} />  
        </View>  
       </View>  
      </View>  
  
      {/* Horizontal Menu Container */}  
      <View style={styles.menuContainer}>  
       <TouchableOpacity style={styles.menuItem}>  
        <Feather name="book" size={24} color="#000" />  
        <Text style={styles.menuText}>Bimbingan</Text>  
       </TouchableOpacity>  
       <TouchableOpacity style={styles.menuItem}>  
        <Feather name="calendar" size={24} color="#000" />  
        <Text style={styles.menuText}>Janji Temu</Text>  
       </TouchableOpacity>  
       <TouchableOpacity style={styles.menuItem}>  
        <Feather name="star" size={24} color="#000" />  
        <Text style={styles.menuText}>Review</Text>  
       </TouchableOpacity>  
      </View>  
  
      {/* Notification Section */}  
      <View style={styles.notificationSection}>  
       <Text style={styles.notificationTitle}>Review masuk</Text>  
       <Text style={styles.notificationSubtitle}>Dari Joko, S.Kom., M.T</Text>  
       <View style={styles.notificationBox}>  
        <Text style={styles.notificationText}>Udah bagus untuk bab II nya tapi perbaiki lagi kata katanya menjadi baku dan bahasa indonesia</Text>  
       </View>  
      </View>  
  
      {/* Meeting Notification */}  
      <View style={styles.notificationSection}>  
       <Text style={styles.notificationTitle}>Ada Janji Temu nih</Text>  
       <Text style={styles.notificationSubtitle}>Dengan Joko, S.Kom., M.T</Text>  
       <View style={styles.notificationBox}>  
        <Text style={styles.notificationText}>24 April 2024 at 10:00 - 12:00 AM</Text>  
       </View>  
      </View>  
  
      <View style={styles.notificationSection}>  
       <Text style={styles.notificationTitle}>Ada Janji Temu nih</Text>  
       <Text style={styles.notificationSubtitle}>Dengan Joko, S.Kom., M.T</Text>  
       <View style={styles.notificationBox}>  
        <Text style={styles.notificationText}>24 April 2024 at 10:00 - 12:00 AM</Text>  
       </View>  
      </View>  
    </ScrollView>  
  
    {/* Bottom Navigation */}  
    <View style={styles.bottomMenuContainer}>  
      <TouchableOpacity style={styles.bottomMenuItem}>  
       <Feather name="home" size={24} color="#000" />  
       <Text style={styles.bottomMenuText}>Beranda</Text>  
      </TouchableOpacity>  
      <TouchableOpacity style={styles.bottomMenuItem}>  
       <Feather name="more-horizontal" size={24} color="#000" />  
       <Text style={styles.bottomMenuText}>Lainnya</Text>  
      </TouchableOpacity>  
      <TouchableOpacity style={styles.bottomMenuItem}>  
       <Feather name="book" size={24} color="#000" />  
       <Text style={styles.bottomMenuText}>Akademik</Text>  
      </TouchableOpacity>  
      <TouchableOpacity style={styles.bottomMenuItem}>  
       <Feather name="message-square" size={24} color="#000" />  
       <Text style={styles.bottomMenuText}>Pesan</Text>  
      </TouchableOpacity>  
      <TouchableOpacity style={styles.bottomMenuItem}>  
       <Feather name="user" size={24} color="#000" />  
       <Text style={styles.bottomMenuText}>Akun</Text>  
      </TouchableOpacity>  
    </View>  
   </SafeAreaView>  
  );  
};  
  
const styles = StyleSheet.create({  
  container: {  
   flex: 1,  
   backgroundColor: "#F5F5F5",  
  },  
  headerContainer: {  
   flexDirection: "row",  
   justifyContent: "space-between",  
   alignItems: "center",  
   marginVertical: 10,  
   backgroundColor: "#FFFFFF",  
   padding: 10,  
   borderRadius: 15,  
   marginTop: 40,  
   shadowColor: "#000",  
   shadowOffset: { width: 0, height: 2 },  
   shadowOpacity: 0.1,  
   shadowRadius: 3,  
  },  
  time: {  
   fontSize: 18,  
   fontWeight: "bold",  
  },  
  searchBar: {  
   flex: 1,  
   height: 40,  
   borderColor: "#ddd",  
   borderWidth: 1,  
   borderRadius: 8,  
   padding: 8,  
   marginHorizontal: 16,  
  },  
  greetingContainer: {  
   backgroundColor: "#3470A2",  
   padding: 20,  
   borderRadius: 15,  
   marginVertical: 10,  
   borderRadius: 20,  
  },  
  greetingText: {  
   fontSize: 24,  
   color: "#FFF",  
   fontWeight: "bold",  
  },  
  subText: {  
   color: "#FFF",  
   fontSize: 16,  
   marginVertical: 5,  
  },  
  progressContainer: {  
   marginTop: 10,  
   backgroundColor: "rgba(255, 255, 255, 0.8)",  
   padding: 10,  
   borderRadius: 20,  
  },  
  progressText: {  
   color: "#333",  
   fontSize: 14,  
  },  
  progressBarBackground: {  
   backgroundColor: "#143C5E",  
   height: 10,  
   borderRadius: 10,  
   overflow: "hidden",  
   marginTop: 5,  
  },  
  progressBarFill: {  
   width: "55%",  
   height: "100%",  
   backgroundColor: "#FFD700",  
  },  
  menuContainer: {  
   flexDirection: "row",  
   justifyContent: "space-around",  
   marginVertical: 20,  
  },  
  menuItem: {  
   alignItems: "center",  
   paddingVertical: 10,  
  },  
  menuIcon: {  
   width: 40,  
   height: 40,  
   marginBottom: 5,  
  },  
  menuText: {  
   fontSize: 16,  
   color: "#333",  
   fontWeight: "bold",  
  },  
  notificationSection: {  
   marginTop: 20,  
   backgroundColor: "#63ABE6",  
   borderRadius: 20,  
   padding: 15,  
   shadowColor: "#000",  
   shadowOffset: { width: 0, height: 2 },  
   shadowOpacity: 0.1,  
   shadowRadius: 3,  
  },  
  notificationTitle: {  
   fontWeight: "bold",  
   fontSize: 18,  
   color: "#333",  
  },  
  notificationSubtitle: {  
   fontSize: 14,  
   color: "#555",  
   marginVertical: 5,  
  },  
  notificationBox: {  
   backgroundColor: "#F7F7F7",  
   borderRadius: 10,  
   padding: 10,  
   marginTop: 5,  
  },  
  notificationText: {  
   fontSize: 14,  
   color: "#333",  
  },  
  bottomMenuContainer: {  
   flexDirection: "row",  
   justifyContent: "space-around",  
   paddingVertical: 15,  
   backgroundColor: "#FFFFFF",  
   borderTopLeftRadius: 30,  
   borderTopRightRadius: 30,  
   shadowColor: "#000",  
   shadowOffset: { width: 0, height: -2 },  
   shadowOpacity: 0.1,  
   shadowRadius: 10,  
  },  
  bottomMenuItem: {  
   alignItems: "center",  
   paddingVertical: 10,  
  },  
  bottomMenuIcon: {  
   width: 25,  
   height: 25,  
  },  
  bottomMenuText: {  
   fontSize: 14,  
   color: "#333",  
  },  
});  
  
export default App;