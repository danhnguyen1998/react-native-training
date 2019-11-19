import { Navigation } from 'react-native-navigation';

const APP_IMAGE_SCREEN = 'app.image.screen';

const appImageScreen = (componentId, passProps) =>
    Navigation.push(componentId, {
        component: {
            id: APP_IMAGE_SCREEN,
            name: APP_IMAGE_SCREEN,
            options: {
                topBar: {
                    visible: true,
                    height: 0,
                },
            },
            passProps,
        },
    });

export { APP_IMAGE_SCREEN, appImageScreen };

