import { StatusBar } from 'expo-status-bar';

import './global.css';

import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginScreen } from '@/screens/login';
import { ListaScreen } from '@/screens/lista';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SomarScreen } from '@/screens/Soma';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamlist } from '@/interface/rootPages';
import { ListaNumerosScreen } from '@/screens/listanumeros';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamlist>();

  return (
    <>
      <SafeAreaView className="flex-1 ">
        <NavigationContainer>
          <Stack.Navigator initialRouteName="listanumero" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="soma" component={SomarScreen} />
            <Stack.Screen name="listas" component={ListaScreen} />
            <Stack.Screen name="listanumero" component={ListaNumerosScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>

      <StatusBar style="auto" />
    </>
  );
}
