import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomHeaderDosen from "./CustomHeaderDosen";
import CustomHeaderMhs from "./CustomHeaderMhs";
import DashboardMhs from "./DashboardMhs";
import DashboardDosen from "./DashboardDosen";
import JanjiTemuMhs from "./JanjiTemuMhs";
import JanjiTemuDosen from "./JanjiTemuDosen";
import ReviewMhs from "./ReviewMhs";
import ReviewDosen from "./ReviewDosen";
import NotifikasiMhs from "./NotifikasiMhs";
import NotifikasiDosen from "./NotifikasiDosen";
import RiwayatMhs from "./RiwayatMhs";
import RiwayatDosen from "./RiwayatDosen";
import HLogin from "./HLogin";
import HRegistrasi from "./HRegistrasi";
import AkunMhs from "./AkunMhs";
import AkunDosen from "./AkunDosen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HLogin">
        <Stack.Screen name="HLogin" component={HLogin} />
        <Stack.Screen name="HRegistrasi" component={HRegistrasi} />
        <Stack.Screen name="AkunMhs" component={AkunMhs} />
        <Stack.Screen name="AkunDosen" component={AkunDosen} />
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
        <Stack.Screen name="Janji Temu Mahasiswa" component={JanjiTemuMhs} options={{ headerTitle: "Janji Temu Mahasiswa" }} />
        <Stack.Screen name="Janji Temu Dosen" component={JanjiTemuDosen} options={{ headerTitle: "Janji Temu Dosen" }} />

        <Stack.Screen name="Review Mahasiswa" component={ReviewMhs} options={{ headerTitle: "Review Mahasiswa" }} />
        <Stack.Screen name="Review Dosen" component={ReviewDosen} options={{ headerTitle: "Review Dosen" }} />

        <Stack.Screen name="Notifikasi Mahasiswa" component={NotifikasiMhs} options={{ headerTitle: "Notifikasi Mahasiswa" }} />
        <Stack.Screen name="Notifikasi Dosen" component={NotifikasiDosen} options={{ headerTitle: "Notifikasi Dosen" }} />

        <Stack.Screen name="Riwayat Mahasiswa" component={RiwayatMhs} options={{ headerTitle: "Riwayat Mahasiswa" }} />
        <Stack.Screen name="Riwayat Dosen" component={RiwayatDosen} options={{ headerTitle: "Riwayat Dosen" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
