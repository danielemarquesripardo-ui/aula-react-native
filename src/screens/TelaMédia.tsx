import { BotaoCustomizado } from '@/components/botaoCustumizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export function TelaMédia () {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [resultado, setResultado] = useState<number | null>(null);

  function calcularMedia() {
    const media = (Number(nota1) + Number(nota2)) / 2;
    setResultado(media);
  }

   return (
    <View className="flex-1 items-center justify-center p-5 gap-4">
      <Text className="text-3xl" >Média</Text>
      
        <InputCustomizado
          placeholder="nota1"
          keyboardType="numeric"
          onChangeText={(text) => {
            setNota1(text);
          }}
        />
        <InputCustomizado
          placeholder="nota2"
          keyboardType="numeric"
          
          onChangeText={(text) => {
            setNota2(text);
          }}
        />

        <BotaoCustomizado title="Média" onPress={calcularMedia} />
        <Text className="text-4xl mt-3">Nota:{resultado}</Text>
      </View>
    );
}