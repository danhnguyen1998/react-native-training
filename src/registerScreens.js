import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import CalendarScreen from 'screens/calendar';
import { APP_CALENDAR_SCREEN } from 'screens/calendar/navigation';
import HomeScreen from 'screens/home';
import { APP_HOME_SCREEN } from 'screens/home/navigation';
import LoginScreen from 'screens/login';
import { APP_LOGIN_SCREEN } from 'screens/login/navigation';
import Screen from 'screens/screen2';
import { APP_SCREEN } from 'screens/screen2/navigation';
import ServiceScreen from 'screens/service';
import { APP_SERVICE_SCREEN } from 'screens/service/navigation';
import SplashScreen from 'screens/splash';
import { APP_SPLASH_SCREEN } from 'screens/splash/navigation';
import RootComponent from './boot';
import theme from './theme';

const Screens = new Map();
Screens.set(APP_HOME_SCREEN, HomeScreen);
Screens.set(APP_SCREEN, Screen);
Screens.set(APP_LOGIN_SCREEN, LoginScreen);
Screens.set(APP_SPLASH_SCREEN, SplashScreen);
Screens.set(APP_SERVICE_SCREEN, ServiceScreen);
Screens.set(APP_CALENDAR_SCREEN, CalendarScreen);

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
