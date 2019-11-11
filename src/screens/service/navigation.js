import { Navigation } from 'react-native-navigation';

const APP_SERVICE_SCREEN = 'app.service';

const appServiceScreen = () => {
    Navigation.setDefaultOptions({
        statusBar: {
            backgroundColor: 'blue',
            style: 'light',
        },
    });

    Navigation.setRoot({
        root: {
            stack: {
                id: 'serviceStack',
                children: [
                    {
                        component: {
                            id: APP_SERVICE_SCREEN,
                            name: APP_SERVICE_SCREEN,
                            options: {
                                title: {
                                    text: 'Service',
                                },
                            },
                        },
                    },
                ],
            },
        },
    });
};

export { APP_SERVICE_SCREEN, appServiceScreen };

