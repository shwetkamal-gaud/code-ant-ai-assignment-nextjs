import { takeEvery } from 'redux-saga/effects'
import { GET_DATA } from "../Actions/action";
import { fetchDataSaga } from "./getRequestHandlesr";

export function* rootSaga() {
    yield takeEvery(GET_DATA, fetchDataSaga);
}