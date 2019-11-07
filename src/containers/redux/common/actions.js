import { createActions } from "redux-actions";

const actions = createActions({
  /** hiển thị loading */
  ON_LOADING_ACTION: null,
  /** ẩn loading */
  OFF_LOADING_ACTION: null,
  /** log error */
  LOG_ERROR_ACTION: (errorMessShow, errMess) => ({ errorMessShow, errMess })
});

export const { onLoadingAction, offLoadingAction, logErrorAction } = actions;
