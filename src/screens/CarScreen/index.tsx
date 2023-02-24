import React, { useState } from "react";
import {
  StatusBar,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { observer } from "mobx-react";
import styles from "./styles";
import theme from "../../theme";
import DropDownPicker from "react-native-dropdown-picker";
import { carmanager } from "../../managers/CarManager";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import { Navigation } from "react-native-navigation";
import { HOME_NAV } from "../../navigation";
import Entypo from "react-native-vector-icons/Entypo";
import { CAR_TYPE } from "../../managers/types/car";
interface Props {
  car: CAR_TYPE;
}
const CarScreen = observer((props: Props) => {
  const car = props.car;
  const [selectedCategory, setSelectedCategory] = useState<string>(
    car.category
  );
  const [openCategory, setOpenCategory] = useState<boolean>(false);
  const [selectedMake, setSelectedMake] = useState<string>(car.make);
  const [openMake, setOpenMake] = useState<boolean>(false);
  const [selectedYear, setSelectedYear] = useState<string>(
    car.year?.toString()
  );
  const [openYear, setOpenYear] = useState<boolean>(false);
  const [carName, setName] = useState<string>(car.name);
  const [carRegistrationNumber, setCarRegistration] = useState<string>(
    car.registration_no
  );
  const [carColor, setCarColor] = useState<string>(car.color);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const updateCar = () => {
    const car: CAR_TYPE = {
      _id: props.car._id,
      name: carName,
      year: parseInt(selectedYear),
      make: selectedMake,
      registration_no: carRegistrationNumber,
      color: carColor,
      category: selectedCategory,
    };
    const message = carmanager.attemptToUpdateCar(car);
    if (message === "Success") {
      Alert.alert("Success", "Car updated successfully");
    } else {
      setErrorMessage(message);
    }
  };

  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor={theme.colors.background}
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
        <Text style={styles.Title}>Add New Car</Text>
      </View>

      <View
        style={{
          width: "95%",
          alignSelf: "center",
          marginTop: responsiveHeight(2),
        }}
      >
        <Text style={styles.FormTextLeft}>Category</Text>
        <DropDownPicker
          searchPlaceholder="Select Category"
          searchPlaceholderTextColor={theme.colors.strokeGrey}
          open={openCategory}
          value={selectedCategory}
          onChangeValue={() => setErrorMessage("")}
          items={carmanager.categoriesList}
          setOpen={setOpenCategory}
          setValue={setSelectedCategory}
          placeholder="Select Category"
          placeholderStyle={styles.dropDownPlaceHolder}
          dropDownContainerStyle={styles.dropDownContainer}
          style={[styles.dropDown, { marginTop: responsiveHeight(2) }]}
          textStyle={styles.dropDownText}
        />
      </View>
      <View style={styles.Form}>
        <View style={styles.FormTitle}>
          <Text style={styles.FormTextLeft}>Name</Text>
        </View>
        <View style={styles.FormTitle1}>
          <View style={styles.NameInput}>
            <TextInput
              value={carName}
              style={styles.TextInput}
              placeholder="Car model name"
              onChangeText={(value) => {
                setName(value);
                setErrorMessage("");
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.Form}>
        <View style={styles.FormTitle}>
          <Text style={styles.FormTextLeft}>Registration No.</Text>
          <Text style={styles.FormTextRight}>Color</Text>
        </View>
        <View style={styles.FormTitle1}>
          <View style={{ width: "47%" }}>
            <View style={styles.Input}>
              <TextInput
                value={carRegistrationNumber}
                placeholder="ABC-123"
                style={styles.TextInput}
                onChangeText={(value) => {
                  setCarRegistration(value);
                  setErrorMessage("");
                }}
              />
            </View>
          </View>
          <View style={{ width: "47%" }}>
            <View style={styles.Input}>
              <TextInput
                value={carColor}
                placeholder="White"
                style={styles.TextInput}
                onChangeText={(value) => {
                  setCarColor(value);
                  setErrorMessage("");
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.Form}>
        <View style={styles.FormTitle}>
          <Text style={styles.FormTextLeft}>Model Year</Text>
          <Text style={styles.FormTextRight}>Make</Text>
        </View>
        <View style={styles.FormTitle1}>
          <View style={{ width: "47%" }}>
            <DropDownPicker
              searchable
              listMode="MODAL"
              searchPlaceholder="Select Year"
              searchPlaceholderTextColor={theme.colors.strokeGrey}
              open={openYear}
              value={selectedYear}
              items={carmanager.modelYear}
              setOpen={setOpenYear}
              setValue={setSelectedYear}
              onChangeValue={() => setErrorMessage("")}
              placeholder="Select Year"
              placeholderStyle={styles.dropDownPlaceHolder}
              dropDownContainerStyle={styles.dropDownContainer}
              style={styles.dropDown}
              textStyle={styles.dropDownText}
            />
          </View>
          <View style={{ width: "47%" }}>
            <DropDownPicker
              searchable
              listMode="MODAL"
              searchPlaceholder="Select Make"
              searchPlaceholderTextColor={theme.colors.strokeGrey}
              open={openMake}
              value={selectedMake}
              items={carmanager.makeList}
              setOpen={setOpenMake}
              setValue={setSelectedMake}
              onChangeValue={() => setErrorMessage("")}
              placeholder="Select Make"
              placeholderStyle={styles.dropDownPlaceHolder}
              dropDownContainerStyle={styles.dropDownContainer}
              style={styles.dropDown}
              textStyle={styles.dropDownText}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.addCarButton} onPress={() => updateCar()}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
      {errorMessage !== "" && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
    </SafeAreaView>
  );
});
export default CarScreen;
