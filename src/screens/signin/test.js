Navigation.setRoot({
  root: {
    stack: {
      id: 'homeStack',
      children: [
        {
          component: {
            id: APP_HOME_SCREEN,
            name: APP_HOME_SCREEN,
            options: {
              title: {
                text: 'Home',
              },
            },
          },
        },
      ],
    },
  },
});
