import { handleActions } from "redux-actions";
import { invalidTokenAction } from "./actions";

export default handleActions(
  {
    [invalidTokenAction]: state => ({ ...state, tokenIsValid: false })
  },
  {
    tokenIsValid: true
  }
);
