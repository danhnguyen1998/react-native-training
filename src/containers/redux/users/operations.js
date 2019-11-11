import AsyncStorage from "@react-native-community/async-storage";
import { logErrorAction, offLoadingAction, onLoadingAction } from "containers/redux/common/actions";
import { put, takeLatest } from "redux-saga/effects";
import { logOutAction } from "./actions";

/** Sage logout */
function* logOutWatcher() {
    yield takeLatest(logOutAction, function* () {
        try {
            yield put(onLoadingAction());
            yield AsyncStorage.clear();
        } catch (error) {
            yield put(logErrorAction(error.message));
        } finally {
            yield put(offLoadingAction());
        }
    });
}

export default { logOutWatcher };
