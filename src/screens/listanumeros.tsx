import { BotaoCustomizado } from '@/components/botaoCustumizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useEffect, useState } from 'react';

import { ScrollView, Text, View } from 'react-native';
import { ListaScreen } from './lista';
import { GetData, storeData } from '@/utils/storage';

export function ListaNumerosScreen() {
  const [numeroStr, setNumero] = useState('');
  const [lista, setLista] = useState<number[]>([]);


  function adicionaNumero() {
    setLista([...lista, Number(numeroStr)]);
    storeData({key: "ListaNumeros", value: JSON.stringify([...lista, Number(numeroStr)])});
    setNumero('');
  }

  function LimpaLista() {
    setLista([]);

    storeData({key: "ListaNumeros", value: JSON.stringify([])});
  }

  function VerificarParImpar(Numero: number) {
    return Numero % 2 === 0 ? "par" : "Ímpar";
  }

  async function carregaLista() {
    const dados = await GetData("ListaNumeros");
    if (dados) {
      setLista(dados);
    }
  }

  useEffect(() => {
    carregaLista();
  }, []);
 
  return (
    <View className="flex-1 items-center gap-4 p-3">
      <Text className="Text-4xl m-3">Lista de numeros</Text>
      <InputCustomizado placeholder="Número" value={numeroStr} onChangeText={(Number) => setNumero(Number)} />
      <BotaoCustomizado title="Adicionar Numero" onPress={adicionaNumero} />
      <BotaoCustomizado title="Limpar lista" onPress={LimpaLista} />

        <ScrollView className="w-full mt-5 p-3 border-gray-300 rounded-lg gap-5">
        {lista.map((numeroStr, index) => (
          <Text key={index} className="Text-xl">
            {numeroStr} - {VerificarParImpar(numeroStr)}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}



