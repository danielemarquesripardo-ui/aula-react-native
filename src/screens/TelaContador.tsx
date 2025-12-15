import { BotaoCustomizado } from '@/components/botaoCustumizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export function TelaContador() {
  const [contador, setContador] = useState(0);

  function incrementar () {
    setContador(contador + 1);
  }
  function decrementar () {
    setContador(contador - 1);
  }

  return (
    <View className="flex-1 items-center justify-center w-full items-center gap-5 p-5">
      <Text className="text-4xl mb-5">Inputs: </Text>
      <BotaoCustomizado title="+" onPress={incrementar} />
      <BotaoCustomizado title="-" onPress={decrementar} />
      <Text className="text-2xl"> {contador}</Text>
    </View>
  );
}
  