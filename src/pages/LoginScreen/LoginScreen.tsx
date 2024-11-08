import { Input } from "@/src/components/Input/Input";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerBox}>
        <Text style={styles.title}>Faça Login</Text>
        <View style={styles.containerForm}>
          <Input label="E-mail" id="email" />
          <Input label="Senha" id="password" secureTextEntry={true} />
        </View>
      </View>
    </SafeAreaView>
  );
};
