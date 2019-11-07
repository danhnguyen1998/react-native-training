import { appLaunchAction, appToBackgroundAction, backgroundToAppAction } from "containers/redux/appState/actions";
import { AppState } from "react-native";

export default () => createStore => (...args) => {
  const store = createStore(...args);
  let currentState = null;
  const handleAppStateChange = nextAppState => {
    if (currentState !== nextAppState) {
      if ((currentState === null || currentState === "unknown") && nextAppState === "active") {
        // Launch the application
        store.dispatch(appLaunchAction());
      } else if (currentState === "active" && nextAppState === "background") {
        // Exit the background
        store.dispatch(appToBackgroundAction());
      } else if (currentState === "background" && nextAppState === "active") {
        // Run from the background
        store.dispatch(backgroundToAppAction());
      }
    }
    currentState = nextAppState;
  };
  AppState.addEventListener("change", handleAppStateChange);
  // setTimeout to allow redux-saga to catch the initial state
  setTimeout(() => handleAppStateChange(AppState.currentState));
  return store;
};
