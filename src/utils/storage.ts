import AsyncStorage from "@react-native-async-storage/async-storage";

interface IStorageData {

  value: string;

  key: string;
}

export const storeData = async ({value, key}: IStorageData)=> {
  try {
    AsyncStorage.setItem(key, value);

  } catch (e) {
    console.log("Erro ao salvar dados", e);
  }
};

export const GetData = async (key: string) => {
  try {
    const jsonValue  = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("Erro ao ler dados", e);
  }
};
   
  