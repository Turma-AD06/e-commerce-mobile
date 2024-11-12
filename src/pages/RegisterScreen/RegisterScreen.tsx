import { Button } from "@/src/components/Button/Button";
import { SafeAreaView, View, Text } from "react-native";
import { styles } from "./styles";
import { Input } from "@/src/components/Input/Input";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { Form } from "@/src/components/Form";
import { useForm } from "react-hook-form";

export const RegisterScreen = ({ navigation }: NativeStackScreenProps<any>) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useForm();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerBox}>
        <Text style={styles.title}>Cadastre-se</Text>
        <View style={styles.containerForm}>
          <Form
            errors={errors}
            register={register}
            setValue={setValue}
            style={styles.containerForm}
          >
            <Input label="Nome" id="name" />
            <Input label="E-mail" id="email" />
            <Input label="Senha" id="password" secureTextEntry={true} />
          </Form>
          <View style={styles.buttonContainer}>
            <Button text="Cadastrar" onPress={() => {}} />
            <View style={styles.loginTextContainer}>
              <Text style={styles.loginText}>Já possui uma conta?</Text>
              <Button
                text="Faça seu login"
                onPress={() => {
                  navigation.navigate("Login");
                }}
                variant="link"
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
