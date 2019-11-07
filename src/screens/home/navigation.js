import { Navigation } from "react-native-navigation";

const APP_SIDEBAR_HOME_SCREEN = "app.sidebar.home";
const APP_HOME_SCREEN = "app.home";

const rootHomeScreen = () => {
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: "blue",
      style: "light"
    }
  });

  Navigation.setRoot({
    root: {
      component: {
        id: APP_HOME_SCREEN,
        name: APP_HOME_SCREEN,
        options: {
          topBar: {
            visible: false,
            height: 0
          },
          sideMenu: {
            animationType: "slide-and-scale",
            openGestureMode: "bezel"
          }
        }
      }
    }
  });
};

export { APP_HOME_SCREEN, APP_SIDEBAR_HOME_SCREEN, rootHomeScreen };

