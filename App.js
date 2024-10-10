//App.js
import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack'; 
import { NavigationContainer } from '@react-navigation/native'; 

import DashboardAwal from './DashboardAwal';
import DashboardMhs from './DashboardMhs';
import BimbinganMhs from './BimbinganMhs';


const Stack = createStackNavigator(); //Deklarasi Stack Navigator

class App extends Component {
  render() {
    return (
      <NavigationContainer> 
        <Stack.Navigator> 
          <Stack.Screen
            name="Dashboard"
            component={DashboardAwal}
          /> 
          <Stack.Screen
            name="Mahasiswa"
            component={DashboardMhs}
          />
          <Stack.Screen
            name="Bimbingan"
            component={BimbinganMhs}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
