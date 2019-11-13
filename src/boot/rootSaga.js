import appStateSaga from "containers/redux/appState/operations";
import userSaga from "containers/redux/users/operations";
import { networkSaga } from "react-native-offline";
import { all, fork } from "redux-saga/effects";
import screenSaga from "screens/screenSaga";

export default function* rootSaga() {
    const sagas = [
        ...Object.values(appStateSaga),
        ...Object.values(userSaga),
        ...Object.values(screenSaga)
    ].map(fork);
    yield all([fork(networkSaga, { pingInterval: 30000 }), ...sagas]);
}
