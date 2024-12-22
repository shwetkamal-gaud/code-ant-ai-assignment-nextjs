import { call, put } from 'redux-saga/effects';

import { SET_DATA } from '../Actions/action'
import { getRequest } from './getRequest';
import {Saga}   from 'redux-saga';

export function* fetchDataSaga(action: any): Generator<any, void, any>{
    try {
        const response = yield call(getRequest, action.payload);
        console.log('response', response)
        yield put({ type: SET_DATA, payload: response });
    } catch (error) {
        console.log(error);
    }
}