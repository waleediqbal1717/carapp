import React from "react";
import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Alert,
} from "react-native";
import { observer } from "mobx-react";
import styles from "./styles";
import Entypo from "react-native-vector-icons/Entypo";
import theme from "../../theme";
import { FlatList } from "react-native-gesture-handler";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import { carmanager } from "../../managers/CarManager";
import { Navigation } from "react-native-navigation";
import { car_screen, HOME_NAV } from "../../navigation";
interface Props {
  make: string;
}
const AllCars = observer((props: Props) => {
  const renderItems = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.CarBox}
        onPress={() => Navigation.push(HOME_NAV, car_screen(item))}
      >
        <TouchableOpacity
          style={{ position: "absolute", top: 10, right: 10 }}
          onPress={() =>
            Alert.alert("Delete Car", "Are you sure to delete this car?", [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              {
                text: "Deelete",
                onPress: () => carmanager.deleteCar(item._id, item.make),
                style: "default",
              },
            ])
          }
        >
          <Entypo
            name="cross"
            color={theme.colors.dark}
            size={responsiveFontSize(3)}
          />
        </TouchableOpacity>
        <Text style={styles.makeTitle}>{item.name}</Text>
        <View style={styles.row}>
          <Text style={styles.subTitle}>Category: {item.category}</Text>
          <Text style={styles.subTitle}>Year: {item.year}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.subTitle}>Color: {item.color}</Text>
          <Text style={styles.subTitle}>Reg No: {item.registration_no}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor={theme.colors.secondary}
      />
      <View style={styles.Header}>
        <TouchableOpacity
          style={{ marginLeft: "3%" }}
          onPress={() => Navigation.pop(HOME_NAV)}
        >
          <Entypo
            name="chevron-small-left"
            color={theme.colors.background}
            size={responsiveFontSize(3)}
          />
        </TouchableOpacity>
        <Text style={styles.Title}>{props.make}</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginVertical: responsiveHeight(1) }}
        initialNumToRender={8}
        maxToRenderPerBatch={8}
        data={carmanager.specificMakeCarsList}
        extraData={carmanager.specificMakeCarsList}
        renderItem={renderItems}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
});
export default AllCars;
