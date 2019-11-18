import { createActions } from 'redux-actions';

const actions = createActions({
    FETCH_USERS_ACTION: (payload) => ({
        payload
    })
});

export const { fetchUsersAction } = actions;