import { Navigation } from 'react-native-navigation';
import { APP_GALLERY_SCREEN } from '../gallery/navigation';
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
                            id: 'galleryStack',
                            children: [
                                {
                                    component: {
                                        id: APP_GALLERY_SCREEN,
                                        name: APP_GALLERY_SCREEN,
                                        options: {
                                            topBar: {
                                                title: {
                                                    text: 'Gallery'
                                                }
                                            },
                                            bottomTab: {
                                                text: 'Gallery',
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

