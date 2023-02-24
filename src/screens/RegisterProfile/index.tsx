import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { observer } from "mobx-react";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import theme from "../../theme";
interface Props {
  mobile: string;
}
const RegisterProfile = observer((props: Props) => {
  const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  const cnicReg = /\d{5}\d{8}\d/;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cnic, setCNIC] = useState("");
  // const mobile = props.mobile;

  const [isEmptyName, setIsEmptyName] = useState(false);
  const [invalidEmail, setInValidEmail] = useState(false);
  const [invalidPhone, setInValidPhone] = useState(false);
  const [invalidCNIC, setInValidCNIC] = useState(false);
  const [isTermChecked, setTermChecked] = useState(false);

  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor={theme.colors.background}
      />
      <theme.StackHeader title={"Complete Profile"} screen="completeprofile" />
      <KeyboardAvoidingView style={{ flex: 1 }} enabled>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.Body}>
            <View style={[styles.Form, { marginTop: 30 }]}>
              <View style={styles.FormTitle}>
                <Text style={styles.FormTextLeft}>Full Name</Text>
                <Text style={styles.FormTextRight}>City</Text>
              </View>
              <View style={styles.FormTitle1}>
                <View style={{ width: "47%" }}>
                  <View style={styles.Input}>
                    <TextInput
                      style={styles.TextInput}
                      onChangeText={(val) => {
                        setName(val);
                        setIsEmptyName(false);
                      }}
                    />
                  </View>
                </View>
                <View style={{ width: "47%" }}>
                  <View style={styles.Input}>
                    <TextInput
                      style={styles.TextInput}
                      onChangeText={(val) => {
                        setName(val);
                        setIsEmptyName(false);
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.Form}>
              <View style={styles.FormTitle}>
                <Text style={styles.FormTextEmail}>Email</Text>
              </View>
              <View style={styles.FormTitle1}>
                <View style={styles.EmailInput}>
                  <TextInput
                    style={styles.TextInput}
                    onChangeText={(val) => {
                      setEmail(val);
                      setInValidEmail(false);
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
});
export default RegisterProfile;
