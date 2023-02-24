import { StyleSheet } from "react-native";
import theme from "../../theme";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: responsiveWidth(100),
    backgroundColor: theme.colors.background,
    alignItems: "center",
  },
  logoImage: {
    width: responsiveWidth(20),
    height: responsiveWidth(30),
    resizeMode: "contain",
    alignSelf: "center",
  },
  errorMessage: {
    color: "red",
    fontSize: responsiveFontSize(1.6),
    marginVertical: responsiveHeight(1),
  },
  mainView: {
    flex: 1,
    width: responsiveWidth(100),
    backgroundColor: theme.colors.primary,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  ButtonRow: {
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: responsiveHeight(2),
  },
  OptionButton: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  ActiveText: {
    fontSize: responsiveFontSize(2),
    color: "#fff",
    fontWeight: "bold",
  },
  InActiveText: {
    fontSize: responsiveFontSize(2),
    color: "rgba(255, 255, 255, 0.6)",
  },
  View2: {
    flex: 1,
    width: responsiveWidth(100),
    backgroundColor: theme.colors.background,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(5),
  },
  TextInput: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.strokeGrey,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#000",
  },
  WelcomeText: {
    fontSize: responsiveFontSize(2.5),
    color: theme.colors.secondary,
    marginTop: responsiveHeight(1),
    fontWeight: "bold",
  },
  InputTitleFocused: {
    fontSize: responsiveFontSize(2),
    color: theme.colors.secondary,
    marginTop: responsiveHeight(1),
  },
  InputTitle: {
    fontSize: responsiveFontSize(2),
    color: theme.colors.strokeGrey,
    marginTop: responsiveHeight(1),
  },
  SignUpButton: {
    width: "100%",
    height: responsiveHeight(7),
    borderRadius: 20,
    backgroundColor: theme.colors.secondary,
    marginTop: responsiveHeight(6),
    marginBottom: responsiveHeight(1),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: theme.colors.secondary,
  },
  SocialButtonView: {
    flexDirection: "row",
    width: "70%",
    alignSelf: "center",
    justifyContent: "space-around",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
    fontSize: responsiveFontSize(1.6),
    color: theme.colors.secondary,
  },
});

export default styles;
