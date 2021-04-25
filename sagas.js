import {all, call, put, takeEvery} from 'redux-saga/effects';

export const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
    console.log('Hello Sagas!');
}

function* watchIncrementAsync() {
    console.log('watchIncrementAsync');
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* incrementAsync() {
    console.log('incrementAsync');
    yield call(delay,1000);
    yield put({ type: 'INCREMENT' });
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}
