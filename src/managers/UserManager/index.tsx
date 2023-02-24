import { action, makeObservable, observable } from "mobx";
import { persist } from "mobx-persist";
import React from "react";
import { Alert } from "react-native";
import { goToHome, goToSignin } from "../../navigation";

import { carmanager } from "../CarManager";
import { USER_TYPE } from "../types/user";

class UserManager {
  @persist @observable loggedIn: boolean = false;
  @persist("object") @observable user: USER_TYPE = {};
  @persist("list") @observable registeredUserList: Array<USER_TYPE> = [];
  @observable loginOption: string = "signin";
  @observable loading: boolean = false;

  constructor() {
    makeObservable(this);
  }
  @action.bound
  setLoginOption(option: string) {
    this.loginOption = option;
  }
  @action.bound
  removeUser() {
    this.loggedIn = false;
    this.user = {};
    goToSignin();
  }

  @action.bound
  setLoading(value: boolean) {
    this.loading = value;
  }
  @action.bound
  setUser(user: USER_TYPE) {
    this.user = user;
  }
  @action.bound
  setLogin(value: boolean) {
    this.loggedIn = value;
  }
  @action.bound
  registerUser(user: USER_TYPE) {
    const userFound = this.registeredUserList.find(
      (item) => item.phone === user.phone
    );
    if (!userFound) {
      this.registeredUserList.push(user);
      this.setLogin(true);
      return "Success";
    } else {
      return "User already exist, Please  signin";
    }
  }
  @action.bound
  attemptToLogin(mobile: string, password: string) {
    const userFound = this.registeredUserList.find(
      (item) => item.phone === mobile
    );
    if (userFound) {
      if (userFound.password === password) {
        this.setUser(userFound);
        this.setLogin(true);
        return "Success";
      } else {
        return "Incorrect password";
      }
    } else return "User not found, Please signup first";
  }
}
export const usermanager = new UserManager();
export const UserManagerContext = React.createContext(usermanager);
export const getUserManager = () => React.useContext(UserManagerContext);
