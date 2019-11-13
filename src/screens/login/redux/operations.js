import { take } from "redux-saga/effects";
import { logInAction } from "./actions";

function* logInWatcher() {
    yield take(logInAction, function* () {
        try {
            yield console.log("Danh");
            return "Danh";
        } catch (error) {
            yield console.log(error);
        }
    });
}

export default { logInWatcher };