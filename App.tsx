import { StatusBar } from 'expo-status-bar';

import './global.css';

import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginScreen } from '@/screens/login';
import { ListaScreen } from '@/screens/lista';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SomarScreen } from '@/screens/Soma';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <SafeAreaView className="flex-1 ">
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="soma" component={SomarScreen} />
            <Stack.Screen name="Listas" component={ListaScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>

      <StatusBar style="auto" />
    </>
  );
}
