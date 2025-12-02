import { BotaoCustomizado } from '@/components/botaoCustumizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useState } from 'react';
import { Text, View } from 'react-native';

export function LoginScreen() {
  const [login, setLogin] = useState('');

  const [senha, setSenha] = useState('');

  console.log(senha);
  console.log(login);
  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full items-center gap-5 p-5">
        <Text className="text-3xl">Nosso app </Text>
        <InputCustomizado
          placeholder={'Login'}
          onChangeText={(text) => {
            setLogin(text);
          }}
        />

        <InputCustomizado
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => {
            setSenha(text);
          }}
        />

        <BotaoCustomizado title="Entrar"
         onPress={() => console.log("login", login, "senha", senha)} />
        <Text className="text-blue-400">Esqueceu a Senha?</Text>
      </View>
    </View>
  );
}
