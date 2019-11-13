import { createActions } from 'redux-actions';

const actions = createActions({
    LOG_IN_ACTION: (payload) => ({
        payload
    })
});

export const { logInAction } = actions;