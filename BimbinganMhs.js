import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileCard = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/BackBimbingan.png')} resizeMode="cover" style={styles.BackPage}>
      <View style={styles.profileContainer}>
        <Image source={require('./assets/fotoprofil.png')}
          style={styles.profilePicture}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Nama: M. Fakhri Rizqullah</Text>
          <Text style={styles.profileNim}>NIM: 09031382126006</Text>
          <Text style={styles.profileDosenPembimbing1}>
            Dosen Pembimbing 1:
          </Text>
          <Text style={styles.profileJoko}>Joko, S.Kom., M.T</Text>
          <Text style={styles.profileDosenPembimbing2}>
            Dosen Pembimbing 2:
          </Text>
          <Text style={styles.profileClara}>Clara, S.Kom., M.Kom</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Janji Temu')}>
          <Text style={styles.buttonText}>Janji Temu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Review Mahasiswa')}>
          <Text style={styles.buttonText}>Review</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Riwayat Mahasiswa')}>
          <Text style={styles.buttonText}>Riwayat</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#3470A2',
    borderRadius: 25,
    margin: 35,
    marginTop: 25,
    elevation: 5,
  },
  BackPage: {
    flex: 1,
  },
  profilePicture: {
    marginTop: 15,
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  profileInfo: {
    marginLeft: 30,
    fontSize:12,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileNim: {
    fontSize: 16,
    color: '#fff',
  },
  profileDosenPembimbing1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileJoko: {
    fontSize: 16,
    color: '#fff',
  },
  profileDosenPembimbing2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileClara: {
    fontSize: 16,
    color: '#fff',
  },
  buttonContainer: {
    padding: 5,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    // borderColor: '#F7F8F8',
    borderWidth:0,
    borderRadius:0,
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 70,
    marginBottom: 20,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},

},
  buttonText: {
    color: '#515151',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 15,
  },
});

export default ProfileCard;
