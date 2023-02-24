import theme from "../../theme";
import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  CarBox: {
    height: responsiveHeight(20),
    width: responsiveWidth(46),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: theme.colors.primary,
    elevation: 5,
    borderRadius: 10,
    marginVertical: responsiveHeight(1),
    opacity: 0.7,
  },
  makeTitle: {
    color: theme.colors.secondary,
    fontSize: responsiveFontSize(2),
    textAlign: "center",
    fontWeight: "bold",
  },
  Header: {
    height: responsiveHeight(8),
    width: responsiveWidth(100),
    backgroundColor: theme.colors.secondary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
  },
  Title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: responsiveFontSize(2),
  },
  buttonText: {
    color: theme.colors.background,
    fontSize: responsiveFontSize(2),
    textAlign: "center",
    fontWeight: "bold",
  },
  countTitle: {
    color: theme.colors.dark,
    fontSize: responsiveFontSize(1.7),
    textAlign: "center",
    marginTop: 5,
  },
  title: {
    color: theme.colors.secondary,
    fontSize: responsiveFontSize(2.2),
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: responsiveHeight(2),
  },
  addCarButton: {
    height: responsiveHeight(7),
    width: responsiveWidth(95),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.secondary,
    borderRadius: 10,
    position: "absolute",
    bottom: responsiveHeight(2),
  },
});

export default styles;
