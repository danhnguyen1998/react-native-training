import { Navigation } from 'react-native-navigation';

const APP_SIGNIN = 'app.signin';

const appSignIn = () => {
  Navigation.setRoot({
    root: {
      component: {
        id: APP_SIGNIN,
        name: APP_SIGNIN,
      },
    },
  });
};

export { APP_SIGNIN, appSignIn };

