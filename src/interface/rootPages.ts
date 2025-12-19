import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamlist = {
  login: undefined;
  listanumero: undefined;
  soma: undefined;
  listas: undefined;
};

export type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamlist
>;