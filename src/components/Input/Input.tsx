import { forwardRef } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { FormControl } from "../FormControl/FormControl";
import { styles } from "./styles";

interface InputProps extends TextInputProps {
  label?: string;
  isRequired?: boolean;
  id: string;
}

const InputBase = (
  { label, isRequired, secureTextEntry }: InputProps,
  ref: any
) => {
  return (
    <FormControl label={label} isRequired={isRequired}>
      <View style={styles.containerInput}>
        <TextInput
          ref={ref}
          secureTextEntry={secureTextEntry}
          style={styles.input}
        />
      </View>
    </FormControl>
  );
};

export const Input = forwardRef<any, InputProps>(InputBase);
