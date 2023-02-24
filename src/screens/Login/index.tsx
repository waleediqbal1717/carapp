import React, { useRef, useState } from "react";
import {
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { observer } from "mobx-react-lite";
import styles from "./styles";
import theme from "../../theme";
import Feather from "react-native-vector-icons/Feather";
import { Navigation } from "react-native-navigation";
import PhoneInput from "react-native-phone-input";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { usermanager } from "../../managers/UserManager";
import { logo } from "../../assets";
import { goToHome } from "../../navigation";
import { USER_TYPE } from "../../managers/types/user";

const Login = observer(() => {
  let valuePhone = useRef();
  const [mobile, setMobile] = useState<string>("+92");
  const updateInfo = () => {
    setErrorMessage("");
    setMobile(valuePhone.getValue());
  };

  const changeCode = (value: string) => {
    setErrorMessage("");
    setMobile(value);
  };
  const [newMobile, setNewMobile] = useState<string>("+92");
  const changeNewCode = (value: string) => {
    setErrorMessage("");
    setNewMobile(value);
  };
  const updateNewPhone = () => {
    setErrorMessage("");
    setNewMobile(valuePhone.getValue());
  };
  const [securePassTextEntry, setSecurePassTextEntry] = useState<boolean>(true);
  const [secureNewPassTextEntry, setSecureNewPassTextEntry] =
    useState<boolean>(true);
  const [secureCPassTextEntry, setSecureCPassTextEntry] =
    useState<boolean>(true);
  const [focusedInput, setFocusedInput] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [fname, setFName] = useState<string>("");
  const [lname, setLName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [newpass, setNewPass] = useState<string>("");
  const [newCpass, setNewCPass] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const emailReg = /\S+@\S+\.\S+/;
  const attemptLogin = () => {
    const message = usermanager.attemptToLogin(mobile.trim(), pass.trim());
    if (message === "Success") {
      goToHome();
    } else {
      setErrorMessage(message);
    }
  };
  const signUP = () => {
    if (fname.trim() == "") setErrorMessage("Please enter your First Name");
    else if (lname.trim() == "") setErrorMessage("Please enter your Last Name");
    else if (email.trim() == "") setErrorMessage("Please enter your Email");
    else if (email.trim() !== "" && emailReg.test(email.trim()) === false) {
      setErrorMessage("Please enter valid email");
    } else if (newMobile.trim() == "" || newMobile.trim() == "+92")
      setErrorMessage("Please enter your Phone Number");
    else if (newpass.trim() == "")
      setErrorMessage("Please enter your Password");
    else if (newpass.trim().length < 7)
      setErrorMessage("Password should be atleast 7 characters long");
    else if (newCpass.trim() == "")
      setErrorMessage("Please re-enter your Password");
    else if (newpass.trim() !== newCpass.trim()) {
      setErrorMessage("Password and Confirm Password not matched");
    } else {
      const user: USER_TYPE = {
        fname,
        lname,
        username: fname + " " + lname,
        phone: mobile,
        email,
        password: newCpass,
      };
      const message = usermanager.registerUser(user);
      if (message === "Success") {
        usermanager.setLoginOption("signin");
        goToHome();
      } else {
        setErrorMessage(message);
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: responsiveHeight(3),
        }}
      >
        <Image source={logo} style={styles.logoImage} />
        <View style={styles.mainView}>
          <View style={styles.ButtonRow}>
            <TouchableOpacity
              style={styles.OptionButton}
              onPress={() => usermanager.setLoginOption("signin")}
            >
              <Text
                style={
                  usermanager.loginOption === "signin"
                    ? styles.ActiveText
                    : styles.InActiveText
                }
              >
                SIGN IN
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.OptionButton}
              onPress={() => usermanager.setLoginOption("signup")}
            >
              <Text
                style={
                  usermanager.loginOption === "signup"
                    ? styles.ActiveText
                    : styles.InActiveText
                }
              >
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
          {usermanager.loginOption === "signin" ? (
            <View style={styles.View2}>
              <Text style={styles.WelcomeText}>Welcome</Text>
              <Text
                style={[
                  styles.InputTitle,
                  { marginBottom: responsiveHeight(3) },
                ]}
              >
                Sign in with your account
              </Text>
              <Text
                style={
                  focusedInput === "un"
                    ? styles.InputTitleFocused
                    : styles.InputTitle
                }
              >
                Phone Number
              </Text>
              <View style={styles.TextInput}>
                <PhoneInput
                  style={{ height: responsiveHeight(7), width: "100%" }}
                  accessible={true}
                  accessibilityLabel="txtPhone"
                  initialCountry={"pk"}
                  onPressFlag={() => console.log("")}
                  onSelectCountry={() => updateInfo()}
                  onChangePhoneNumber={(val) => changeCode(val)}
                  value={mobile}
                  textStyle={{ color: theme.colors.dark }}
                  textProps={{ placeholderTextColor: theme.colors.strokeGrey }}
                  ref={(ref) => {
                    valuePhone = ref;
                  }}
                />
              </View>
              <Text
                style={
                  focusedInput === "ups"
                    ? styles.InputTitleFocused
                    : styles.InputTitle
                }
              >
                Password
              </Text>
              <View style={styles.TextInput}>
                <TextInput
                  style={{ width: "90%", color: theme.colors.dark }}
                  onFocus={() => setFocusedInput("ups")}
                  onChangeText={(val) => {
                    setPass(val);
                    setErrorMessage("");
                  }}
                  autoCapitalize="none"
                  secureTextEntry={securePassTextEntry}
                />
                <TouchableOpacity
                  onPress={() => setSecurePassTextEntry(!securePassTextEntry)}
                >
                  <Feather
                    name={securePassTextEntry ? "eye-off" : "eye"}
                    size={responsiveFontSize(3)}
                    color={
                      securePassTextEntry
                        ? theme.colors.strokeGrey
                        : theme.colors.dark
                    }
                  />
                </TouchableOpacity>
              </View>
              {errorMessage !== "" && (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
              )}
              <TouchableOpacity
                style={styles.SignUpButton}
                onPress={() => {
                  if (pass.trim() == "" || mobile.trim() == "")
                    setErrorMessage("Please fill all details");
                  else if (pass.trim().length < 7)
                    setErrorMessage(
                      "Password should be atleast 7 characters long"
                    );
                  else {
                    attemptLogin();
                  }
                }}
              >
                {usermanager.loading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text style={styles.ActiveText}>SIGN IN</Text>
                )}
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.View2}>
              <Text
                style={
                  focusedInput === "fn"
                    ? styles.InputTitleFocused
                    : styles.InputTitle
                }
              >
                First Name
              </Text>
              <TextInput
                style={styles.TextInput}
                onFocus={() => setFocusedInput("fn")}
                onChangeText={(val) => {
                  setFName(val);
                  setErrorMessage("");
                }}
              />
              <Text
                style={
                  focusedInput === "ln"
                    ? styles.InputTitleFocused
                    : styles.InputTitle
                }
              >
                Last Name
              </Text>
              <TextInput
                style={styles.TextInput}
                onFocus={() => setFocusedInput("ln")}
                onChangeText={(val) => {
                  setLName(val);
                  setErrorMessage("");
                }}
              />
              <Text
                style={
                  focusedInput === "em"
                    ? styles.InputTitleFocused
                    : styles.InputTitle
                }
              >
                Email
              </Text>
              <TextInput
                style={styles.TextInput}
                onFocus={() => setFocusedInput("em")}
                onChangeText={(val) => {
                  setEmail(val);
                  setErrorMessage("");
                }}
                keyboardType="email-address"
                placeholder="name@email.com"
              />
              <Text
                style={
                  focusedInput === "pn"
                    ? styles.InputTitleFocused
                    : styles.InputTitle
                }
              >
                Phone Number
              </Text>
              <View style={styles.TextInput}>
                <PhoneInput
                  style={{ height: responsiveHeight(7), width: "100%" }}
                  accessible={true}
                  accessibilityLabel="txtPhone"
                  initialCountry={"pk"}
                  onPressFlag={() => console.log("")}
                  onSelectCountry={() => updateNewPhone()}
                  onChangePhoneNumber={(val) => changeNewCode(val)}
                  value={newMobile}
                  textStyle={{ color: theme.colors.dark }}
                  textProps={{ placeholderTextColor: theme.colors.strokeGrey }}
                  ref={(ref) => {
                    valuePhone = ref;
                  }}
                />
              </View>
              <Text
                style={
                  focusedInput === "nps"
                    ? styles.InputTitleFocused
                    : styles.InputTitle
                }
              >
                Password
              </Text>
              <View style={styles.TextInput}>
                <TextInput
                  style={{
                    width: "90%",
                    color: "#000",
                    fontSize: responsiveFontSize(2),
                  }}
                  onFocus={() => setFocusedInput("nps")}
                  onChangeText={(val) => {
                    setNewPass(val);
                    setErrorMessage("");
                  }}
                  autoCapitalize="none"
                  secureTextEntry={secureNewPassTextEntry}
                />
                <TouchableOpacity
                  onPress={() =>
                    setSecureNewPassTextEntry(!secureNewPassTextEntry)
                  }
                >
                  <Feather
                    name={secureNewPassTextEntry ? "eye-off" : "eye"}
                    size={responsiveFontSize(3)}
                    color={
                      secureNewPassTextEntry
                        ? theme.colors.strokeGrey
                        : theme.colors.dark
                    }
                  />
                </TouchableOpacity>
              </View>
              <Text
                style={
                  focusedInput === "ncp"
                    ? styles.InputTitleFocused
                    : styles.InputTitle
                }
              >
                Confirm Password
              </Text>
              <View style={styles.TextInput}>
                <TextInput
                  style={{
                    width: "90%",
                    color: "#000",
                    fontSize: responsiveFontSize(2),
                  }}
                  onFocus={() => setFocusedInput("ncp")}
                  onChangeText={(val) => {
                    setNewCPass(val);
                    setErrorMessage("");
                  }}
                  autoCapitalize="none"
                  secureTextEntry={secureCPassTextEntry}
                />
                <TouchableOpacity
                  onPress={() => setSecureCPassTextEntry(!secureCPassTextEntry)}
                >
                  <Feather
                    name={secureCPassTextEntry ? "eye-off" : "eye"}
                    size={responsiveFontSize(3)}
                    color={
                      secureCPassTextEntry
                        ? theme.colors.strokeGrey
                        : theme.colors.dark
                    }
                  />
                </TouchableOpacity>
              </View>
              {errorMessage !== "" && (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
              )}
              <TouchableOpacity style={styles.SignUpButton} onPress={signUP}>
                <Text style={styles.ActiveText}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

export default Login;
