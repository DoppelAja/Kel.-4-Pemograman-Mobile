import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/Dashboard.png')} style={styles.logo} />
      </View>

      <Text style={styles.title}>Bimbingan TA</Text>
      <Text style={styles.subtitle}>Masuk sebagai?</Text>

      <TouchableOpacity style={styles.buttonMhs}>
        <Text style={styles.buttonText}>Mahasiswa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonDsn}>
        <Text style={styles.buttonText}>Dosen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    // fontFamily: 'Poppins-Regular',
    fontSize: 32,
    fontWeight: '700',
    color: '#3470A2',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3470A2',
    marginTop: 10,
    marginBottom: 15,
  },
  buttonMhs: {
    backgroundColor: '#3470A2',
    padding: 20,
    paddingHorizontal: 100,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  buttonDsn: {
    backgroundColor: '#3470A2',
    padding: 20,
    paddingHorizontal: 115,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default App;
