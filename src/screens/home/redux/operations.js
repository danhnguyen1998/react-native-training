import { offLoadingAction, onLoadingAction } from "containers/redux/common/actions";
import { put, takeLatest } from "redux-saga/effects";
import { logErrorAction } from "../../../containers/redux/common/actions";
import { logInAction } from "./actions";

function* fetchUserWatcher() {
    yield takeLatest(logInAction, function* () {
        try {
            yield put(onLoadingAction());
            console.log("Home");
        } catch (error) {
            yield put(logErrorAction(error.message));
        } finally {
            yield put(offLoadingAction());
        }
    });
}


export default { fetchUserWatcher };

