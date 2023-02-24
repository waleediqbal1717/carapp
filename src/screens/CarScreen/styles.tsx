import theme from "../../theme";
import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  Status: {
    backgroundColor: theme.colors.primary,
  },

  Header: {
    height: responsiveHeight(8),
    width: responsiveWidth(100),
    backgroundColor: theme.colors.secondary,
    flexDirection: "row",
    alignItems: "center",
  },
  Title: {
    color: "#fff",
    marginLeft: "3%",
    fontWeight: "bold",
    fontSize: responsiveFontSize(2),
  },

  NameInput: {
    width: "100%",
    height: responsiveHeight(6),
    borderRadius: 6,
    alignItems: "center",
    flexDirection: "row",
    fontFamily: "Inter-Regular",
    backgroundColor: "rgba(196, 196, 196, 0.2)",
    paddingHorizontal: 5,
  },
  Form: {
    width: "95%",
    alignSelf: "center",
  },
  FormTitle: {
    flexDirection: "row",
    marginTop: 15,
    width: "100%",
  },
  FormTitle1: {
    flexDirection: "row",
    marginTop: 7,
    width: "100%",
    justifyContent: "space-between",
  },
  FormTextLeft: {
    fontSize: responsiveFontSize(2),
    width: "58%",
    fontWeight: "600",
    color: theme.colors.secondary,
  },
  FormTextEmail: {
    fontSize: responsiveFontSize(2),
    fontWeight: "600",
  },
  FormTextRight: {
    fontSize: responsiveFontSize(2),
    width: "46%",
    left: -15,
    fontWeight: "600",
    color: theme.colors.secondary,
  },
  dropDownContainer: {
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.dark,
  },
  dropDownPlaceHolder: {
    color: theme.colors.strokeGrey,
  },
  dropDown: {
    backgroundColor: "rgba(196, 196, 196, 0.2)",
    borderColor: theme.colors.dark,
    borderWidth: 0,
  },
  dropDownText: {
    color: theme.colors.dark,
  },
  Input: {
    width: "100%",
    height: responsiveHeight(6),
    borderRadius: 6,
    backgroundColor: "rgba(196, 196, 196, 0.2)",
    paddingHorizontal: 5,
  },
  TextInput: {
    height: "100%",
    width: "100%",
    color: theme.colors.dark,
    fontSize: responsiveFontSize(1.8),
  },

  errorMessage: {
    color: "red",
    fontSize: responsiveFontSize(1.6),
    alignSelf: "center",
  },
  buttonText: {
    color: theme.colors.background,
    fontSize: responsiveFontSize(2),
    textAlign: "center",
    fontWeight: "bold",
  },
  addCarButton: {
    height: responsiveHeight(7),
    width: responsiveWidth(95),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.secondary,
    borderRadius: 10,
    marginTop: responsiveHeight(3),
  },
});

export default styles;
