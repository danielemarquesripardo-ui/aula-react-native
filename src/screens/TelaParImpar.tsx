import { BotaoCustomizado } from '@/components/botaoCustumizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export function TelaParImpar() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  function VerificarParImpar() {
    const num = Number(numero);
    if (isNaN(num)) {
      setResultado('Por favor, insira um número válido.');
    } else if (num % 2 === 0) {
      setResultado('O número é Par');
    } else {
      setResultado('O número é ìmpar');
    }
  }

  return (
    <View className="flex-1 items-center justify-center w-full items-center gap-5 p-5">
      <Text className="text-4xl mb-5">Par ou Ímpar</Text>
      <InputCustomizado placeholder="Digite um número" value={numero} onChangeText={setNumero} />
      <BotaoCustomizado title="Par ou Ímpar" onPress={VerificarParImpar} />
      <Text className="text-2xl">{resultado}</Text>
    </View>
  );
}
