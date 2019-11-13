import AsyncStorage from '@react-native-community/async-storage';
import { offLoadingAction, onLoadingAction } from "containers/redux/common/actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { USER_KEY, USER_LOGIN } from '../../../containers/constant/index';
import { logErrorAction } from "../../../containers/redux/common/actions";
import { rootHomeScreen } from '../../home/navigation';
import { loginApi } from '../services';
import { logInAction } from "./actions";

function* logInWatcher() {
    yield takeLatest(logInAction, function* ({ payload }) {
        try {
            yield put(onLoadingAction());
            const response = yield call(loginApi, payload.payload);
            if (response.error) {
                alert('Invalid email or password!');
            } else {
                AsyncStorage.setItem(USER_KEY, response.result.token);
                AsyncStorage.setItem(USER_LOGIN, JSON.stringify(response.result.user));
                rootHomeScreen();
            }

        } catch (error) {
            yield put(logErrorAction(error.message));
        } finally {
            yield put(offLoadingAction());
        }
    });
}


export default { logInWatcher };

