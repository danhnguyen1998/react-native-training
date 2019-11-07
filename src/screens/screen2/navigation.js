import { Navigation } from 'react-native-navigation';

const APP_SCREEN = 'app.screen';

const appScreen = () => {
  Navigation.setRoot({
    root: {
      component: {
        id: APP_SCREEN,
        name: APP_SCREEN,
      },
    },
  });
};

export { APP_SCREEN, appScreen };

