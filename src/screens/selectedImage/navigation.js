import { Navigation } from 'react-native-navigation';

const APP_SELECTED_IMAGES_SCREEN = 'app.selected.images.screen';

const appSelectedImagesScreen = (componentId, passProps) =>
    Navigation.push(componentId, {
        component: {
            id: APP_SELECTED_IMAGES_SCREEN,
            name: APP_SELECTED_IMAGES_SCREEN,
            options: {
                topBar: {
                    visible: true,
                    height: 0,
                },
            },
            passProps,
        },
    });

export { APP_SELECTED_IMAGES_SCREEN, appSelectedImagesScreen };

