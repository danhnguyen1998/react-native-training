import { Navigation } from 'react-native-navigation';
import { APP_CALENDAR_SCREEN } from '../calendar/navigation';
import { APP_SERVICE_SCREEN } from '../service/navigation';
const APP_SIDEBAR_HOME_SCREEN = 'app.sidebar.home';
const APP_HOME_SCREEN = 'app.home';

const rootHomeScreen = () => {
    Navigation.setDefaultOptions({
        statusBar: {
            backgroundColor: 'blue',
            style: 'light',
        },
        topBar: {
            rightButtons: [
                {
                    id: 'logoutButton',
                    text: 'Logout'
                }
            ]
        }
    });

    Navigation.setRoot({
        root: {
            bottomTabs: {
                children: [
                    {
                        stack: {
                            id: 'homeStack',
                            children: [
                                {
                                    component: {
                                        id: APP_HOME_SCREEN,
                                        name: APP_HOME_SCREEN,
                                        options: {
                                            topBar: {
                                                title: {
                                                    text: 'Home'
                                                }
                                            },
                                            bottomTab: {
                                                text: 'Dashboard',
                                            }
                                        }
                                    },
                                },
                            ],
                        },
                    },
                    {
                        stack: {
                            id: 'serviceStack',
                            children: [
                                {
                                    component: {
                                        id: APP_SERVICE_SCREEN,
                                        name: APP_SERVICE_SCREEN,
                                        options: {
                                            topBar: {
                                                title: {
                                                    text: 'Service'
                                                }
                                            },
                                            bottomTab: {
                                                text: 'Service',
                                            },
                                            topBar: {
                                                rightButtons: [
                                                    {
                                                        id: 'backButton',
                                                        text: 'Back',
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                },
                            ],
                        },
                    },
                    {
                        stack: {
                            id: 'calendarStack',
                            children: [
                                {
                                    component: {
                                        id: APP_CALENDAR_SCREEN,
                                        name: APP_CALENDAR_SCREEN,
                                        options: {
                                            topBar: {
                                                title: {
                                                    text: 'Calendar'
                                                }
                                            },
                                            bottomTab: {
                                                text: 'Calendar',
                                            },
                                            topBar: {
                                                rightButtons: [
                                                    {
                                                        id: 'backButton',
                                                        text: 'Back',
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                },
                            ],
                        },
                    }
                ]

            }


        },
    });
};



export { APP_HOME_SCREEN, APP_SIDEBAR_HOME_SCREEN, rootHomeScreen };

