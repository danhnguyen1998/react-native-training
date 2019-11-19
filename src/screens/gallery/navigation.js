import { Navigation } from 'react-native-navigation';

const APP_GALLERY_SCREEN = 'app.gallery';

const appGalleryScreen = () => {
    Navigation.setDefaultOptions({
        statusBar: {
            backgroundColor: 'blue',
            style: 'light',
        },
    });

    Navigation.setRoot({
        root: {
            stack: {
                id: 'galleryStack',
                children: [
                    {
                        component: {
                            id: APP_GALLERY_SCREEN,
                            name: APP_GALLERY_SCREEN,
                            options: {
                                title: {
                                    text: 'Gallery',
                                },
                            },
                        },
                    },
                ],
            },
        },
    });
};

export { APP_GALLERY_SCREEN, appGalleryScreen };

