import { Navigation } from 'react-native-navigation';

const APP_CALENDAR_SCREEN = 'app.calendar';

const appCalendarScreen = () => {
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
                            id: APP_CALENDAR_SCREEN,
                            name: APP_CALENDAR_SCREEN,
                            options: {
                                title: {
                                    text: 'Calendar',
                                },
                            },
                        },
                    },
                ],
            },
        },
    });
};

export { APP_CALENDAR_SCREEN, appCalendarScreen };

