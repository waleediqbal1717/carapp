import theme from "../../theme";
import { StyleSheet } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.colors.background,
    alignItems: "center",
  },
  title: {
    fontSize: responsiveFontSize(2.4),
    color: theme.colors.secondary,
    fontFamily: "Inter-Bold",
    marginTop: 5,
    textAlign: "center",
  },
});
export default styles;
