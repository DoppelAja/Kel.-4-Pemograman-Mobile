import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardAwal from '../screens/DashboardAwal';
import DashboardMhs from '../screens/DashboardMhs';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="DashboardAwal">
      <Stack.Screen name="DashboardAwal" component={DashboardAwal} />
      <Stack.Screen name="DashboardMhs" component={DashboardMhs} />
    </Stack.Navigator>
  );
};