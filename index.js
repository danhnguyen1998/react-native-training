import { Navigation } from "react-native-navigation";
import { checkInternetConnection, offlineActionTypes } from "react-native-offline";
import { persistStore } from "redux-persist";
import { rootHomeScreen } from "screens/home/navigation";
import configureStore from "./src/boot/configureStore";
import { registerScreens } from "./src/registerScreens";

const store = configureStore();

Navigation.events().registerAppLaunchedListener(() => {
  persistStore(store, {}, () => {
    checkInternetConnection().then(isConnected => {
      store.dispatch({
        type: offlineActionTypes.CONNECTION_CHANGE,
        payload: isConnected
      });
      registerScreens(store);
      rootHomeScreen()
    });
  });
});
