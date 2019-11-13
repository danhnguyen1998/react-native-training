import { Navigation } from 'react-native-navigation';

const APP_LOGIN_SCREEN = 'app.login';

const appLoginScreen = () => {
    Navigation.setRoot({
        root: {
            stack: {
                id: 'loginStack',
                children: [
                    {
                        component: {
                            id: APP_LOGIN_SCREEN,
                            name: APP_LOGIN_SCREEN,
                            options: {
                                title: {
                                    text: 'Login',
                                },
                                topBar: {
                                    visible: false
                                }
                            },
                            
                        },
                    },
                ],
            },
        },
    });
};

export { APP_LOGIN_SCREEN, appLoginScreen };

