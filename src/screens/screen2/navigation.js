import { Navigation } from 'react-native-navigation';

const APP_SCREEN = 'app.screen';

const appScreen = (componentId, passProps) =>
    Navigation.push(componentId, {
        component: {
            id: APP_SCREEN,
            name: APP_SCREEN,
            options: {
                topBar: {
                    visible: true,
                    height: 0,
                },
            },
            passProps,
        },
    });

export { APP_SCREEN, appScreen };

