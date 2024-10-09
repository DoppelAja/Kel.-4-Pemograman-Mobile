import React from "react";
import { Button, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Halaman Awal
const HalamanAwal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("./assets/Dashboard.png")} style={styles.logo} />
      </View>

      <Text style={styles.title}>Bimbingan TA</Text>
      <Text style={styles.subtitle}>Masuk sebagai?</Text>

      <TouchableOpacity style={styles.buttonMhs} onPress={() => navigation.navigate("Mahasiswa")}>
        <Text style={styles.buttonTextMhs}>Mahasiswa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonDsn}>
        <Text style={styles.buttonTextDsn}>Dosen</Text>
      </TouchableOpacity>
    </View>
  );
};

// Halaman Mahasiswa
const HalamanMhs = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Halaman Mahasiswa</Text>
      {/* Tambahkan komponen lain sesuai kebutuhan di sini */}
    </View>
  );
};

// Detail Screen
const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button title="Go to Details... again" onPress={() => navigation.push("Details")} />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
    </View>
  );
};

// Stack Navigator
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HalamanAwal">
        <Stack.Screen name="HalamanAwal" component={HalamanAwal} />
        <Stack.Screen name="Mahasiswa" component={HalamanMhs} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#3470A2",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3470A2",
    marginTop: 10,
    marginBottom: 15,
  },
  buttonMhs: {
    backgroundColor: "#3470A2",
    padding: 20,
    paddingHorizontal: 100,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  buttonDsn: {
    borderColor: "#3470A2",
    borderWidth: 2,
    padding: 20,
    paddingHorizontal: 115,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonTextMhs: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  buttonTextDsn: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3470A2",
  },
});

export default App;
