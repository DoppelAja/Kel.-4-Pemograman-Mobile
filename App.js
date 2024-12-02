import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomHeaderDosen from "./CustomHeaderDosen";
import CustomHeaderMhs from "./CustomHeaderMhs";
import DashboardAwal from "./DashboardAwal";
import DashboardMhs from "./DashboardMhs";
import DashboardDosen from "./DashboardDosen";
import BimbinganMhs from "./BimbinganMhs";
import BimbinganDosen from "./BimbinganDosen";
import JanjiTemuMhs from "./JanjiTemuMhs";
import JanjiTemuDosen from "./JanjiTemuDosen";
import ReviewMhs from "./ReviewMhs";
import ReviewDosen from "./ReviewDosen";
import NotifikasiMhs from "./NotifikasiMhs";
import NotifikasiDosen from "./NotifikasiDosen";
import RiwayatMhs from "./RiwayatMhs";
import RiwayatDosen from "./RiwayatDosen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SIKRISPI">
        <Stack.Screen name="SIKRISPI" component={DashboardAwal} />
        <Stack.Screen
          name="Dashboard Mahasiswa"
          component={DashboardMhs}
          options={{
            headerTitle: () => <CustomHeaderMhs />,
          }}
        />
        <Stack.Screen
          name="Dashboard Dosen"
          component={DashboardDosen}
          options={{
            headerTitle: () => <CustomHeaderDosen />,
          }}
        />
        <Stack.Screen name="Bimbingan Mahasiswa" component={BimbinganMhs} />
        <Stack.Screen name="Bimbingan Dosen" component={BimbinganDosen} />
        <Stack.Screen name="Janji Temu Mahasiswa" component={JanjiTemuMhs} />
        <Stack.Screen name="Janji Temu Dosen" component={JanjiTemuDosen} />
        <Stack.Screen name="Review Mahasiswa" component={ReviewMhs} />
        <Stack.Screen name="Review Dosen" component={ReviewDosen} />
        <Stack.Screen name="Notifikasi Mahasiswa" component={NotifikasiMhs} />
        <Stack.Screen name="Notifikasi Dosen" component={NotifikasiDosen} />
        <Stack.Screen name="Riwayat Mahasiswa" component={RiwayatMhs} />
        <Stack.Screen name="Riwayat Dosen" component={RiwayatDosen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
