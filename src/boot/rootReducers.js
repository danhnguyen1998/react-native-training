import commonReducer from "containers/redux/common/reducers";
import userReducer from "containers/redux/users/reducers";
import { reducer as network } from "react-native-offline";
import { combineReducers } from "redux";

export default combineReducers({
  network,
  common: commonReducer,
  user: userReducer
});
