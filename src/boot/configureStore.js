import AsyncStorage from "@react-native-community/async-storage";
import { logOutAction } from "containers/redux/users/actions";
import { createNetworkMiddleware } from "react-native-offline";
import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import applyAppStateListener from "./appStateListener";
import logger from "./logger";
import allReducers from "./rootReducers";
import allSaga from "./rootSaga";

const rootReducers = (state, action) => {
  if (action.type === "LOG_OUT_ACTION") {
    state = {};
  }
  return allReducers(state, action);
};

const tokenMiddleware = ({ dispatch }) => next => async action => {
  if (action.type === "INVALID_TOKEN_ACTION") {
    await dispatch(logOutAction());
    await dispatch(logErrorAction("Phiên làm việc của bạn đã hết hạn"));
  } else {
    return next(action);
  }
};

export default function configureStore() {
  const middlewares = [];
  middlewares.push(tokenMiddleware);
  const networkMiddleware = createNetworkMiddleware({
    queueReleaseThrottle: 200
  });
  middlewares.push(networkMiddleware);
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);
  if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
  }
  const persistConfig = { key: "root", storage: AsyncStorage, whitelist: ["user"] };
  const persistedReducer = persistReducer(persistConfig, rootReducers);
  const enhancer = compose(
    applyAppStateListener(),
    applyMiddleware(...middlewares)
  );
  const store = createStore(persistedReducer, enhancer);
  sagaMiddleware.run(allSaga);
  return store;
}
