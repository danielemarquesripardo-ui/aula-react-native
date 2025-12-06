import { BotaoCustomizado } from '@/components/botaoCustumizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useState } from 'react';

import { Text, View } from 'react-native';

export function ListaScreen() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState<string[]>([]);

  function adicionaItem() {
    setLista([...lista, item]);
    setItem('');
  }

  function LimpaLista() {
    setLista([]);
  }

  return (
    <View className="flex-1 items-center gap-4 p-3">
      <Text className="Text-4xl m-3">Lista de items</Text>
      <InputCustomizado placeholder="item" value={item} onChangeText={(text) => setItem(text)} />
      <BotaoCustomizado title="Adicionar" onPress={adicionaItem} />
      <BotaoCustomizado title="Limpar lista" onPress={LimpaLista} />

      <View>
        {lista.map((item, index) => (
          <Text key={index} className="Text-xl">
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
}
