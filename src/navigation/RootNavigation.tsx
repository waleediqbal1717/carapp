import { Navigation } from "react-native-navigation";

import {
  AUTH_NAV_ID,
  SIGIN_SCREEN,
  HOME_SCREEN,
  HOME_NAV,
  SPLASH_SCREEN,
  CAR_DETAIL_SCREEN,
  CAR_SCREEN,
  ADD_CAR_SCREEN,
  ALL_CAR_SCREEN,
  LOGIN_SCREEN,
} from "./navs";
import Home from "../screens/Home";

import CarDetail from "../screens/CarDetail";
import CarScreen from "../screens/CarScreen";
import AddCarScreen from "../screens/AddCar";
import SignIn from "../screens/SignIn";
import SplashScreen from "../screens/Splash";
import AllCars from "../screens/AllCars";
import Login from "../screens/Login";
import { CAR_TYPE } from "../managers/types/car";
Navigation.registerComponent(SPLASH_SCREEN, () => SplashScreen);
Navigation.registerComponent(HOME_SCREEN, () => Home);
Navigation.registerComponent(CAR_DETAIL_SCREEN, () => CarDetail);
Navigation.registerComponent(CAR_SCREEN, () => CarScreen);
Navigation.registerComponent(ADD_CAR_SCREEN, () => AddCarScreen);
Navigation.registerComponent(ALL_CAR_SCREEN, () => AllCars);
Navigation.registerComponent(SIGIN_SCREEN, () => SignIn);
Navigation.registerComponent(LOGIN_SCREEN, () => Login);
Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: "black",
  },
  topBar: {
    title: {
      color: "black",
    },
  },
});
/** stack initiateers */
export const goToSignin = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: AUTH_NAV_ID,
        children: [
          {
            component: {
              name: LOGIN_SCREEN,
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });

export const goToHome = () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: HOME_NAV,
        children: [
          {
            component: {
              name: HOME_SCREEN,
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};
export const add_car = {
  component: {
    name: ADD_CAR_SCREEN,
    options: {
      topBar: {
        visible: false,
      },
      bottomTabs: {
        visible: false,
      },
      animations: {
        push: {
          waitForRender: true,
        },
      },
    },
  },
};
export const all_cars = (make: string) => ({
  component: {
    name: ALL_CAR_SCREEN,
    options: {
      topBar: {
        visible: false,
      },
      bottomTabs: {
        visible: false,
      },
      animations: {
        push: {
          waitForRender: true,
        },
      },
    },
    passProps: {
      make,
    },
  },
});

export const car_screen = (car: CAR_TYPE) => ({
  component: {
    name: CAR_SCREEN,
    options: {
      topBar: {
        visible: false,
      },
      bottomTabs: {
        visible: false,
      },
      animations: {
        push: {
          waitForRender: true,
        },
      },
    },
    passProps: {
      car,
    },
  },
});
