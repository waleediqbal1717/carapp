import AsyncStorage from "@react-native-async-storage/async-storage";

import Splash from "./src/screens/Splash";
import Home from "./src/screens/Home";
import { Navigation } from "react-native-navigation";
import { create } from "mobx-persist";
import { usermanager } from "./src/managers/UserManager";
import CarScreen from "./src/screens/CarScreen";
import { carmanager } from "./src/managers/CarManager";
import AllCars from "./src/screens/AllCars";
import { AUTH_NAV_ID, SPLASH_SCREEN } from "./src/navigation";
import theme from "./src/theme";

async function hydrateStores() {
  const hydrate = create({ storage: AsyncStorage });
  await hydrate("usermanager", usermanager);
  await hydrate("carmanager", carmanager);
}

Navigation.events().registerAppLaunchedListener(() => {
  hydrateStores().then(() => {
    Navigation.setDefaultOptions({
      topBar: {
        background: {
          color: theme.colors.primary,
        },
      },
      layout: { orientation: ["portrait"] },
    });

    Navigation.setRoot({
      root: {
        stack: {
          id: AUTH_NAV_ID,
          children: [
            {
              component: {
                name: SPLASH_SCREEN,
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
  });
});
