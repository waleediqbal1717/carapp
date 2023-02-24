import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { observer } from "mobx-react";

import styles from "./styles";

import theme from "../../theme";

const AllCars = observer(() => {
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor={theme.colors.background}
      />
    </SafeAreaView>
  );
});
export default AllCars;
