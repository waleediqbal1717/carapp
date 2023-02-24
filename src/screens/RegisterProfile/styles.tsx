import theme from "../../theme";
import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  Status: {
    backgroundColor: "#E5E5E5",
  },
  Body: {
    flex: 1,
    width: "87%",
    alignSelf: "center",
    paddingVertical: 20,
  },
  Header: {
    height: responsiveHeight(8),
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5E5E5",
    elevation: 5,
  },
  Form: {
    marginTop: 0,
    width: "100%",
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
    lineHeight: 19.36,
    width: "58%",
    fontFamily: "Inter",
    fontWeight: "600",
  },
  FormTextEmail: {
    fontSize: responsiveFontSize(2),
    lineHeight: 19.36,
    fontFamily: "Inter",
    fontWeight: "600",
  },
  FormTextRight: {
    fontSize: responsiveFontSize(2),
    lineHeight: 19.36,
    width: "46%",
    left: -15,
    fontFamily: "Inter",
    fontWeight: "600",
  },
  Input: {
    width: "100%",
    height: responsiveHeight(6),
    borderRadius: 6,
    fontFamily: "Inter-Regular",
    backgroundColor: "rgba(196, 196, 196, 0.2)",
    paddingHorizontal: 5,
  },
  EmailInput: {
    width: "100%",
    height: responsiveHeight(6),
    borderRadius: 6,
    alignItems: "center",
    flexDirection: "row",
    fontFamily: "Inter-Regular",
    backgroundColor: "rgba(196, 196, 196, 0.2)",
    paddingHorizontal: 5,
  },
  TextInput: {
    height: "100%",
    width: "100%",
    color: theme.colors.dark,
    fontFamily: "Inter-Regular",
    fontSize: responsiveFontSize(1.8),
  },
});

export default styles;
