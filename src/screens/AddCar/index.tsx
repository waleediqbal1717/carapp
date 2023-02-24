import React from "react";
import { StatusBar, SafeAreaView, Text } from "react-native";
import { observer } from "mobx-react";
import styles from "./styles";
import theme from "../../theme";

const AddCar = observer(() => {
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor={theme.colors.background}
      />
      <Text>Add Car</Text>
    </SafeAreaView>
  );
});
export default AddCar;
