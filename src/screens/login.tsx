import { BotaoCustomizado } from '@/components/botaoCustumizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { Text, View } from 'react-native';

export function LoginScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-green-500">
      <View className="w-full p-5 gap-5 items-center">
        <Text className="text-3xl">Nosso app </Text>
        <InputCustomizado placeholder={'Login'} />
        <InputCustomizado placeholder="Senha" />
        <BotaoCustomizado title="Entrar" />
        <Text className="text-blue-400">
          Esqueceu a Senha?
        </Text>
      </View>
    </View>
  );
}
