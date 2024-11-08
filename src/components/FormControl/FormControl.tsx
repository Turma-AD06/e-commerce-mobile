import { View, Text } from "react-native";
import { styles } from "./styles";
import { ReactNode } from "react";

interface FormControlProps {
  children: ReactNode;
  label?: string;
  isRequired?: boolean;
}

export const FormControl = ({
  children,
  label,
  isRequired,
}: FormControlProps) => {
  return (
    <View style={styles.formControl}>
      {label && (
        <Text style={styles.label}>
          {label}
          {isRequired && <Text style={styles.requiredLabel}> *</Text>}
        </Text>
      )}
      {children}
    </View>
  );
};
