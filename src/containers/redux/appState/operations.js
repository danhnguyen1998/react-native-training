import { put, takeLatest } from "redux-saga/effects";
import { logErrorAction, offLoadingAction, onLoadingAction } from "../common/actions";
import { invalidTokenAction } from "../users/actions";
import { appLaunchAction, appToBackgroundAction, backgroundToAppAction } from "./actions";

function* appLaunchWatcher() {
    yield takeLatest(appLaunchAction, function* () {
        try {
            yield put(onLoadingAction());
        } catch (error) {
            if (error.message === "invalidToken") {
                yield put(invalidTokenAction());
            } else {
                yield put(logErrorAction(error.message));
            }
        } finally {
            yield put(offLoadingAction());
        }
    });
}

function* appToBackgroundWatcher() {
    yield takeLatest(appToBackgroundAction, function* () {
        try {
            yield put(onLoadingAction());
        } catch (error) {
            if (error.message === "invalidToken") {
                yield put(invalidTokenAction());
            } else {
                yield put(logErrorAction(error.message));
            }
        } finally {
            yield put(offLoadingAction());
        }
    });
}

function* backgroundToAppWatcher() {
    yield takeLatest(backgroundToAppAction, function* () {
        try {
            yield put(onLoadingAction());
        } catch (error) {
            if (error.message === "invalidToken") {
                yield put(invalidTokenAction());
            } else {
                yield put(logErrorAction(error.message));
            }
        } finally {
            yield put(offLoadingAction());
        }
    });
}

export default { appLaunchWatcher, appToBackgroundWatcher, backgroundToAppWatcher };
