import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import HomeScreen from 'screens/home';
import { APP_HOME_SCREEN } from 'screens/home/navigation';
import Screen from 'screens/screen2';
import { APP_SCREEN } from 'screens/screen2/navigation';
import SigninScreen from 'screens/signin';
import { APP_SIGNIN } from 'screens/signin/navigation';
import RootComponent from './boot';
import theme from './theme';

const Screens = new Map();
Screens.set(APP_HOME_SCREEN, HomeScreen);
Screens.set(APP_SCREEN, Screen);
Screens.set(APP_SIGNIN, SigninScreen);

const WrappedComponent = (Component, store) => {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RootComponent>
            <Component {...props} />
          </RootComponent>
        </ThemeProvider>
      </Provider>
    );
    return <EnhancedComponent />;
  };
};

export const registerScreens = store => {
  Screens.forEach((ScreenComponent, key) =>
    Navigation.registerComponent(key, () =>
      WrappedComponent(ScreenComponent, store),
    ),
  );
};
