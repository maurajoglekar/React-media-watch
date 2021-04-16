import * as types from './counterTypes';
import * as counterActions from './counterActions';
import MediaItemsAPI from '../../apis/MediaItemsAPI';
import { takeLatest, put, call, fork, all, delay} from "redux-saga/effects";

export function* incrementCounterSaga(action) {
    try {
        yield call(delay, 500);
        yield put(counterActions.setIncrementCounter());

    } catch (response) {}
}

function* watchIncrementCounter() {
    yield takeLatest(types.INCREMENT_COUNTER, incrementCounterSaga);
}

export function* decrementCounterSaga(action) {
    try {
        yield call(delay, 500);
        yield put(counterActions.setIncrementCounter());
    } catch (response) {}
}

function* watchDecrementCounter() {
    yield takeLatest(types.DECREMENT_COUNTER, decrementCounterSaga);
}

export function* getAllMediaItemsSaga(action) {
    try {
        const response = yield call(
            [MediaItemsAPI, MediaItemsAPI.getAll]
          );
        yield put(counterActions.setMediaItems(response));
    } catch (response) {
        console.log('Error while getting media items');
    }
}

function* watchGetAllMediaItems() {
    yield takeLatest(types.GET_MEDIA_ITEMS_ALL, getAllMediaItemsSaga);
}

export function* getMediaItemsByMediumSaga({medium}) {
    try {
        const response = yield call(
            [MediaItemsAPI, MediaItemsAPI.getByMedium],
            medium
          );
        yield put(counterActions.setMediaItems(response));
    } catch (response) {
        console.log('Error while getting media items');
    }
}

function* watchGetMediaItemsByMedium() {
    yield takeLatest(types.GET_MEDIA_ITEMS_BY_MEDIUM, getMediaItemsByMediumSaga);
}

// ------------ Watch Counter Sagas ---------------
export default function* watchCounter() {
    yield all([fork(watchIncrementCounter)]);
    yield all([fork(watchDecrementCounter)]);
    yield all([fork(watchGetAllMediaItems)]);
    yield all([fork(watchGetMediaItemsByMedium)]);
}