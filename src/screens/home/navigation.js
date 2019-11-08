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
      stack: {
        id: 'homeStack',
        children: [
          {
            component: {
              id: APP_HOME_SCREEN,
              name: APP_HOME_SCREEN,
              options: {
                title: {
                  text: 'Home',
                },
              },
            },
          },
        ],
      },
    },
  });
  
};

export { APP_HOME_SCREEN, APP_SIDEBAR_HOME_SCREEN, rootHomeScreen };

