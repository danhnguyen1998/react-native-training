import { ENV } from "containers/constant";
import { handleActions } from "redux-actions";
import { logErrorAction, offLoadingAction, onLoadingAction } from "./actions";

export default handleActions(
  {
    [onLoadingAction]: state => ({ ...state, isLoading: true }),
    [offLoadingAction]: state => ({ ...state, isLoading: false }),
    [logErrorAction]: (state, { payload }) => ({
      ...state,
      errorMessShow: ENV == "develop" ? payload.errMess : payload.errorMessShow
    })
  },
  {
    isLoading: false,
    errorMessShow: null
  }
);
