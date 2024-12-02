import React, { useState, useEffect } from "react";
import { 
  SafeAreaView, 
  StyleSheet, 
  TextInput, 
  Text, 
  View, 
  TouchableOpacity, 
  Image, 
  Animated, 
  ScrollView,
  StatusBar
} from "react-native";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [progress] = useState(new Animated.Value(0));

  const handleNotificationPress = () => {
    alert("Notifikasi ditekan!");
  };

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 0.55,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  }, []);

  const progressInterpolation = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1976D2" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerSection}>
          <View style={styles.headerContainer}>
            <View style={styles.searchContainer}>
              <Image
                source={{ uri: "https://img.icons8.com/ios-filled/50/ffffff/search.png" }}
                style={styles.searchIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Cari sesuatu..."
                placeholderTextColor="#E1F5FE"
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
              />
            </View>

            <TouchableOpacity 
              style={styles.notificationButton}
              onPress={handleNotificationPress}
            >
              <Image
                source={{ uri: "https://img.icons8.com/ios-filled/50/ffffff/appointment-reminders.png" }}
                style={styles.notificationIcon}
              />
              <View style={styles.notificationBadge}>
                <Text style={styles.badgeText}>3</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.cardContainer}>
            <Text style={styles.greetingText}>
              Hi, <Text style={styles.nameText}>Fakhri</Text> 👋
            </Text>
            <Text style={styles.subText}>Gimana proses skripsi mu?</Text>

            <View style={styles.progressBarWrapper}>
              <View style={styles.progressContainer}>
                <Image
                  source={{
                    uri: "https://img.freepik.com/free-vector/computer-performance-boost-rocket-fast-data-transmission-power-measure-dial-with-pointer-scale-with-arrow-response-time-indicator-vector-isolated-concept-metaphor-illustration_335657-1993.jpg",
                  }}
                  style={styles.skripsiIcon}
                />
                <View style={styles.textWrapper}>
                  <Text style={styles.progressText}>55% Skripsi Telah Dikerjakan</Text>
                  <View style={styles.progressBarBackground}>
                    <Animated.View
                      style={[styles.progressBar, { width: progressInterpolation }]}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.mainContent}>
          <View style={styles.buttonContainer}>
            {[
              { icon: "💬", text: "Bimbingan", color: "#FF7043", shadowColor: "#FFE0B2" },
              { icon: "🗓️", text: "Janji Temu", color: "#66BB6A", shadowColor: "#C8E6C9" },
              { icon: "📝", text: "Review", color: "#42A5F5", shadowColor: "#BBDEFB" }
            ].map((item, index) => (
              <TouchableOpacity 
                key={index}
                style={[styles.button, { 
                  backgroundColor: item.color,
                  shadowColor: item.shadowColor 
                }]}
              >
                <View style={styles.buttonIcon}>
                  <Text style={styles.buttonIconText}>{item.icon}</Text>
                </View>
                <Text style={styles.buttonText}>{item.text}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.reviewItemContainer}>
            <View style={styles.reviewHeader}>
              <Text style={styles.reviewHeaderText}>Review Masuk</Text>
              <TouchableOpacity style={styles.viewAllButton}>
                <Text style={styles.viewAllText}>Lihat Semua</Text>
              </TouchableOpacity>
            </View>

            {[
              {
                name: "Joko, S.Kom., M.T.",
                message: "Anda memiliki 3 notifikasi baru! Bimbingan Anda dijadwalkan besok.",
                time: "2 jam yang lalu",
                image: "user-male-circle",
                priority: "high"
              },
              {
                name: "Dr. Sarah, M.Kom.",
                message: "Revisi bab 3 sudah saya review. Ada beberapa catatan penting yang perlu diperhatikan untuk metodologi penelitian.",
                time: "5 jam yang lalu",
                image: "user-female-circle",
                priority: "medium"
              },
              {
                name: "Prof. Ahmad, Ph.D.",
                message: "Metodologi penelitian perlu diperdalam. Jadwalkan bimbingan untuk minggu depan.",
                time: "1 hari yang lalu",
                image: "user-male-circle",
                priority: "low"
              },
              {
                name: "Dr. Budi, M.Sc.",
                message: "Draft presentasi sudah bagus. Siapkan untuk seminar proposal minggu depan.",
                time: "2 hari yang lalu",
                image: "user-male-circle",
                priority: "low"
              }
            ].map((review, index) => (
              <TouchableOpacity 
                key={index} 
                style={[
                  styles.reviewItem,
                  index > 0 && styles.reviewItemBorder
                ]}
              >
                <Image
                  source={{ uri: `https://img.icons8.com/ios-filled/50/000000/${review.image}.png` }}
                  style={styles.reviewerImage}
                />
                <View style={[
                  styles.reviewContent,
                  styles[`priority${review.priority.charAt(0).toUpperCase() + review.priority.slice(1)}`]
                ]}>
                  <Text style={styles.reviewerName}>{review.name}</Text>
                  <Text style={styles.reviewMessage}>{review.message}</Text>
                  <Text style={styles.reviewTime}>{review.time}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.navbarContainer}>
        <View style={styles.navbar}>
          {[
            { icon: "home", text: "Home", active: true },
            { icon: "more", text: "Lainnya" },
            { icon: "academy", text: "Akademik" },
            { icon: "chat-message", text: "Pesan" },
            { icon: "user", text: "Akun" }
          ].map((item, index) => (
            <TouchableOpacity 
              key={index}
              style={[styles.navButton, item.active && styles.navButtonActive]}
            >
              <Image
                source={{ uri: `https://img.icons8.com/ios-filled/50/000000/${item.icon}.png` }}
                style={[styles.navIcon, item.active && styles.navIconActive]}
              />
              <Text style={[styles.navButtonText, item.active && styles.navTextActive]}>
                {item.text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    marginBottom: 60,
  },
  headerSection: {
    backgroundColor: "#2196F3",
    padding: 20,
    paddingTop: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 30,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: "#fff",
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: "#fff",
    fontSize: 16,
  },
  notificationButton: {
    position: "relative",
    padding: 8,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 20,
    elevation: 2,
  },
  notificationIcon: {
    width: 24,
    height: 24,
    tintColor: "#fff",
  },
  notificationBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#FF5252",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  cardContainer: {
    marginTop: 20,
  },
  greetingText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },
  nameText: {
    color: "#FFC107",
    fontWeight: "900",
  },
  subText: {
    color: "#E1F5FE",
    fontSize: 18,
    marginTop: 5,
    marginBottom: 20,
  },
   progressBarWrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    padding: 7,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  skripsiIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  textWrapper: {
    flex: 1,
  },
  progressText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 8,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBar: {
    height: 8,
    backgroundColor: "#FFC107",
    borderRadius: 4,
  },
  mainContent: {
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -10,
    marginBottom: 10,
  },
  button: {
    flex: 1,
    alignItems: "center",
    padding: 15,
    borderRadius: 15,
    marginHorizontal:5,
    elevation: 5,
  },
  buttonIcon: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  buttonIconText: {
    fontSize: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 11.5,
  },
  reviewItemContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#E3F2FD",
  },
  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E3F2FD",
  },
  reviewHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1976D2",
  },
  viewAllButton: {
    backgroundColor: "#E3F2FD",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  viewAllText: {
    color: "#2196F3",
    fontWeight: "600",
  },
  reviewItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  reviewItemBorder: {
    borderTopWidth: 1,
    borderTopColor: "#E3F2FD",
    marginTop: 5,
  },
  reviewerImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 10,
    borderWidth: 2,
    borderColor: "#E3F2FD",
  },
  reviewContent: {
    flex: 1,
    backgroundColor: "#F5F9FF",
    padding: 12,
    borderRadius: 12,
    marginLeft: 5,
    borderLeftWidth: 4,
  },
  priorityHigh: {
    borderLeftColor: "#FF5252",
  },
  priorityMedium: {
    borderLeftColor: "#FFC107",
  },
  priorityLow: {
    borderLeftColor: "#4CAF50",
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1976D2",
    marginBottom: 5,
  },
  reviewMessage: {
    fontSize: 14,
    color: "#424242",
    marginBottom: 5,
    lineHeight: 20,
  },
  reviewTime: {
    fontSize: 12,
    color: "#757575",
    fontStyle: "italic",
  },
  navbarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    elevation: 8,
    borderTopWidth: 1,
    borderTopColor: '#E3F2FD',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: -20,
    paddingHorizontal: -10,
  },
  navButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
    marginHorizontal: 5,
    borderRadius: 12,
  },
  navButtonActive: {
    backgroundColor: "#E3F2FD",
  },
  navIcon: {
    width: 24,
    height: 24,
    tintColor: "#757575",
    marginBottom: 4,
  },
  navIconActive: {
    tintColor: "#2196F3",
  },
  navButtonText: {
    fontSize: 12,
    color: "#757575",
  },
  navTextActive: {
    color: "#2196F3",
    fontWeight: "600",
  },
});

export default App;