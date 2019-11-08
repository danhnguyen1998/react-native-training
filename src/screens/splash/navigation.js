import { Navigation } from 'react-native-navigation';

const APP_SPLASH_SCREEN = 'app.splash';

const appSplashScreen = () => {
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: 'blue',
      style: 'light',
    },
  });

  Navigation.setRoot({
    root: {
      stack: {
        id: 'splashStack',
        children: [
          {
            component: {
              id: APP_SPLASH_SCREEN,
              name: APP_SPLASH_SCREEN,
              options: {
                title: {
                  text: 'Splash',
                },
              },
            },
          },
        ],
      },
    },
  });
};

export { APP_SPLASH_SCREEN, appSplashScreen };

