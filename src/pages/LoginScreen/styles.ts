import { backgroundColors, textSizes, theme } from "@/src/themes/root";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: backgroundColors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  containerBox: {
    width: "100%",
    backgroundColor: theme.colors.white,
    padding: 20,
    borderRadius: 8,
    gap: 10,
  },
  title: {
    fontSize: textSizes.xl,
    fontWeight: "700",
  },
  containerForm: {
    gap: 12,
  },
});
