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
  CarBox: {
    paddingVertical: responsiveHeight(1),
    width: responsiveWidth(90),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
    borderColor: theme.colors.strokeGrey,
    borderWidth: 1,
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
    marginBottom: responsiveHeight(2),
  },
  subTitle: {
    color: theme.colors.secondary,
    fontSize: responsiveFontSize(1.6),
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
});

export default styles;
