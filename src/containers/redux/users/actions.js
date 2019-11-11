import { createActions } from "redux-actions";

const actions = createActions({
    INVALID_TOKEN_ACTION: null,
    LOG_OUT_ACTION: null
});

export const { invalidTokenAction, logOutAction } = actions;
