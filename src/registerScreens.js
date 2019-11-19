import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import GalleryScreen from 'screens/gallery';
import { APP_GALLERY_SCREEN } from 'screens/gallery/navigation';
import HomeScreen from 'screens/home';
import { APP_HOME_SCREEN } from 'screens/home/navigation';
import ImageScreen from 'screens/image';
import { APP_IMAGE_SCREEN } from 'screens/image/navigation';
import LoginScreen from 'screens/login';
import { APP_LOGIN_SCREEN } from 'screens/login/navigation';
import Screen from 'screens/screen2';
import { APP_SCREEN } from 'screens/screen2/navigation';
import SelectedImagesScreen from 'screens/selectedImage';
import { APP_SELECTED_IMAGES_SCREEN } from 'screens/selectedImage/navigation';
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
Screens.set(APP_GALLERY_SCREEN, GalleryScreen);
Screens.set(APP_IMAGE_SCREEN, ImageScreen);
Screens.set(APP_SELECTED_IMAGES_SCREEN, SelectedImagesScreen);

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
