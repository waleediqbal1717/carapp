import React, { useEffect } from "react";
import { StatusBar, ActivityIndicator, View, Text } from "react-native";
import { observer } from "mobx-react";
import styles from "./styles";
import { goToHome, goToSignin } from "../../navigation";
import { usermanager } from "../../managers/UserManager";

import theme from "../../theme";
const SplashScreen = observer(() => {
  const checkIsUserLogin = () => {
    let isLogin = usermanager.loggedIn;

    setTimeout(() => {
      if (!isLogin) {
        goToSignin();
      } else {
        goToHome();
      }
    }, 1000);
  };
  useEffect(() => {
    checkIsUserLogin();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor={theme.colors.background}
      />

      <Text style={styles.title}>Car App</Text>
      <ActivityIndicator
        size="large"
        color={theme.colors.secondary}
        style={{ marginTop: 20, alignSelf: "center" }}
      />
    </View>
  );
});
export default SplashScreen;
