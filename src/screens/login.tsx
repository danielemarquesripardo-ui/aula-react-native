
import { BotaoCustomizado } from "@/components/botaoCustumizado";
import { InputCustomizado } from "@/components/inputCustomizado";
import { Text, View } from "react-native";

export function LoginScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-pink-200">
      <InputCustomizado placeholder={"Login"}/>
      <InputCustomizado placeholder="Senha"/>
      <BotaoCustomizado title="Entrar"/>
    </View>
  )
}
