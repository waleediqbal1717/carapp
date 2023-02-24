import React from "react";
import {
  Text,
  View,
  StatusBar,
  RefreshControl,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { observer } from "mobx-react";
import { Navigation } from "react-native-navigation";
import styles from "./styles";
import { usermanager } from "../../managers/UserManager";
import theme from "../../theme";
import { carmanager } from "../../managers/CarManager";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { add_car, HOME_NAV } from "../../navigation";

const Home = observer(() => {
  const renderItems = ({ item, index }) => {
    return (
      <View style={styles.CarBox}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.makeTitle}>
          {item.make}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.countTitle}>
          ({carmanager.getMakeCount(item.make)})
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.title}>
        Total Registered Cars: {carmanager.registeredCarsList.length}
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginVertical: responsiveHeight(1) }}
        columnWrapperStyle={{ justifyContent: "space-around" }}
        initialNumToRender={8}
        numColumns={2}
        maxToRenderPerBatch={8}
        data={carmanager.getUniqueMake()}
        extraData={carmanager.registeredCarsList}
        renderItem={renderItems}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity
        style={styles.addCarButton}
        onPress={() => Navigation.push(HOME_NAV, add_car)}
      >
        <Text style={styles.buttonText}>Add Car</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
});
export default Home;
