import './global.css';
import { StatusBar } from 'expo-status-bar';


import { SafeAreaView } from 'react-native-safe-area-context';
import { SomarScreen } from '@/screens/Soma';
import { TelaSoma } from '@/screens/TelaSoma';
import { TelaContador } from '@/screens/TelaContador';
import { TelaParImpar } from '@/screens/TelaParImpar';
import { TelaMédia } from '@/screens/TelaMédia';

export default function App() {
  return (
    <>
      <SafeAreaView  className="flex-1 ">
        <TelaMédia />
      </SafeAreaView>

      <StatusBar style="auto" />
    </>
  );
}

