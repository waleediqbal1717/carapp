import { action, makeObservable, observable } from "mobx";
import { persist } from "mobx-persist";
import React from "react";
import CarScreen from "../../screens/CarScreen";
import { CAR_TYPE } from "../types/car";
import cars from "../cars.json";
class CarManager {
  @persist("object") @observable car: CAR_TYPE = {};
  @persist("list") @observable registeredCarsList: Array<CAR_TYPE> = cars;

  @observable loading: boolean = false;

  constructor() {
    makeObservable(this);
  }
  @action.bound
  removeCar() {
    this.car = {};
  }
  @action.bound
  setLoading(value: boolean) {
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
  async attemptToAddCar(car: CAR_TYPE) {
    this.registeredCarsList.push(car);
  }
}
export const carmanager = new CarManager();
export const CarManagerContext = React.createContext(carmanager);
export const getCarManager = () => React.useContext(CarManagerContext);
