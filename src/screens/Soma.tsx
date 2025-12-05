import { BotaoCustomizado } from '@/components/botaoCustumizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export function SomarScreen() {
  const [valor1, setvalor1] = useState('');
  const [valor2, setvalor2] = useState('');
  const [resultado, setResultado] = useState(0);

  function Somar() {
    const Soma = Number(valor1) + Number(valor2);
    setResultado(Soma);
  }
  useEffect(() => {
  setResultado(0);
  }, [valor1, valor2]);

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full items-center gap-5 p-5">
        <InputCustomizado
          placeholder="valor1"
          keyboardType="numeric"
          onChangeText={(text) => {
            setvalor1(text);
          }}
        />
        <InputCustomizado
          placeholder="valor2"
          keyboardType="numeric"
          
          onChangeText={(text) => {
            setvalor2(text);
          }}
        />

        <BotaoCustomizado title="Somar" onPress={Somar} />
        <Text className="text-2xl">Resultado:{resultado}</Text>
      </View>
    </View>
  );
}
