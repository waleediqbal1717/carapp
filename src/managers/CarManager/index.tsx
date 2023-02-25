import { action, makeObservable, observable } from "mobx";
import { persist } from "mobx-persist";
import React from "react";
import { CAR_TYPE, DROPDOWN_TYPE } from "../types/car";
import cars from "../cars.json";
import { Navigation } from "react-native-navigation";
import { HOME_NAV } from "../../navigation";
class CarManager {
  @persist("object") @observable car: CAR_TYPE = {};
  @persist("list") @observable registeredCarsList: Array<CAR_TYPE> = cars;
  @observable specificMakeCarsList: Array<CAR_TYPE> = cars;
  @persist("list") @observable categoriesList: Array<DROPDOWN_TYPE> = [
    { value: "Sedan", label: "Sedan" },
    { value: "SUV", label: "SUV" },
  ];
  @persist("list") @observable makeList: Array<DROPDOWN_TYPE> = [
    { value: "BMW", label: "BMW" },
    { value: "Honda", label: "Honda" },
    { value: "Mazda", label: "Mazda" },
    { value: "Toyota", label: "Toyota" },
  ];
  @persist("list") @observable modelYear: Array<DROPDOWN_TYPE> = [
    { value: "2008", label: "2008" },
    { value: "2009", label: "2009" },
    { value: "2010", label: "2010" },
    { value: "2011", label: "2011" },
    { value: "2012", label: "2012" },
    { value: "2013", label: "2013" },
    { value: "2014", label: "2014" },
    { value: "2015", label: "2015" },
    { value: "2016", label: "2016" },
    { value: "2017", label: "2017" },
    { value: "2018", label: "2018" },
    { value: "2019", label: "2019" },
    { value: "2020", label: "2020" },
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
  ];

  @observable loading: boolean = false;

  constructor() {
    makeObservable(this);
  }
  @action.bound
  removeCar(): void {
    this.car = {};
  }
  @action.bound
  setLoading(value: boolean): void {
    this.loading = value;
  }
  @action.bound
  getUniqueMake(): Array<CAR_TYPE> {
    const makeList: Array<CAR_TYPE> = [
      ...new Map(
        this.registeredCarsList.map((item) => [item["make"], item])
      ).values(),
    ];
    return makeList;
  }
  @action.bound
  getMakeCount(make: string): number {
    const count: number = this.registeredCarsList.filter(
      (item) => item.make === make
    ).length;
    return count;
  }
  @action.bound
  filterSpecificMakeCar(make: string): void {
    this.specificMakeCarsList = this.registeredCarsList.filter(
      (item) => item.make === make
    );
  }
  @action.bound
  attemptToAddCar(car: CAR_TYPE): string {
    if (!car.category) {
      return "Select category";
    } else if (car.name.trim() === "") {
      return "Enter car name";
    } else if (car.registration_no.trim() === "") {
      return "Enter car registration number";
    } else if (car.color.trim() === "") {
      return "Enter car color";
    } else if (!car.make) {
      return "Enter car make";
    } else if (!car.year) {
      return "Enter car model year";
    } else {
      const id = this.registeredCarsList.length + 1;
      car._id = id.toString();
      this.registeredCarsList.push(car);
      return "Success";
    }
  }
  @action.bound
  attemptToUpdateCar(car: CAR_TYPE): string {
    if (!car.category) {
      return "Select category";
    } else if (car.name.trim() === "") {
      return "Enter car name";
    } else if (car.registration_no.trim() === "") {
      return "Enter car registration number";
    } else if (car.color.trim() === "") {
      return "Enter car color";
    } else if (!car.make) {
      return "Enter car make";
    } else if (!car.year) {
      return "Enter car model year";
    } else {
      const index = this.registeredCarsList.findIndex(
        (item) => item._id === car._id
      );
      if (index !== -1) {
        this.registeredCarsList[index] = car;
        this.filterSpecificMakeCar(car.make);
        Navigation.pop(HOME_NAV);
        return "Success";
      }
      return "";
    }
  }
  @action.bound
  deleteCar(id: string, make: string) {
    this.registeredCarsList = this.registeredCarsList.filter(
      (item) => item._id !== id
    );
    this.filterSpecificMakeCar(make);
  }
}
export const carmanager = new CarManager();
export const CarManagerContext = React.createContext(carmanager);
export const getCarManager = () => React.useContext(CarManagerContext);
