import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  Modal,
} from "react-native";
import { observer } from "mobx-react";
import { Navigation } from "react-native-navigation";
import styles from "./styles";
import { usermanager } from "../../managers/UserManager";
import Icon from "react-native-vector-icons/Ionicons";
import { AUTH_NAV_ID, register_profile } from "../../navigation";
import LinearGradient from "react-native-linear-gradient";
import theme from "../../theme";
import PhoneInput from "react-native-phone-input";

const SignIn = observer(() => {
  const mobileReg = /^[+][9][2][3]\d{9}$/;
  const [isEmptyMobile, setIsEmptyMobile] = useState(false);
  const [invalidMobile, setInValidMobile] = useState(false);
  const [mobile, setMobile] = useState("");

  let valuePhone = useRef(null);

  const Continue = () => {
    if (mobile.trim().length == 3) {
      setIsEmptyMobile(true);
      return;
    }
    if (mobileReg.test(mobile.trim()) === false) {
      setInValidMobile(true);
      return;
    }
    Navigation.push(AUTH_NAV_ID, register_profile(mobile));
  };
  const updateInfo = () => {
    setInValidMobile(false);
    setIsEmptyMobile(false);
    setMobile(valuePhone.getValue());
  };
  const changeCode = (val: string) => {
    setInValidMobile(false);
    setIsEmptyMobile(false);
    setMobile(val);
  };

  const renderBottomButton = () => {
    return (
      <TouchableOpacity onPress={Continue} style={styles.BottomButton}>
        <LinearGradient
          colors={[theme.colors.primary, theme.colors.primary_light]}
          style={styles.LinearGradient}
        >
          <Text style={styles.buttonTextBottom}>Continue</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor={theme.colors.containerBackground}
      />
      <View style={styles.Header} />

      <KeyboardAvoidingView style={{ flex: 1 }} enabled>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.Body}>
            <Text style={styles.title}>Enter your mobile number</Text>
            <Text style={styles.subTitle}>
              Enter your mobile number to create an account or login
            </Text>

            <View style={styles.FormTitle1}>
              <View style={styles.Input}>
                <PhoneInput
                  accessibilityLabel="txtPhone"
                  initialCountry={"pk"}
                  onPressFlag={() => console.log("")}
                  onSelectCountry={() => updateInfo()}
                  onChangePhoneNumber={(val) => changeCode(val)}
                  value={mobile}
                  textStyle={{ color: "#000" }}
                  textProps={{ placeholderTextColor: theme.colors.placeholder }}
                  ref={(ref) => {
                    valuePhone = ref;
                  }}
                />
              </View>
            </View>
            {isEmptyMobile && (
              <Text style={styles.ErrorMessage}>Mobile number is required</Text>
            )}
            {invalidMobile && (
              <Text style={styles.ErrorMessage}>
                Enter a valid mobile number
              </Text>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      {renderBottomButton()}
    </SafeAreaView>
  );
});
export default SignIn;
