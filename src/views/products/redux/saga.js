import {
    put,
    call,
    takeLatest
} from 'redux-saga/effects';

import GapsiService from '../../../services/index';
import * as list from './actions';
import * as actions from 'shared/redux/constants';

function* performFetch(action) {

    try {
        console.log('calling');
        yield put(list.starts());

        const response = yield call(GapsiService.products);
        yield put(list.success(response.data));
    } catch (error) {
        yield put(list.fails({
            error
        }));
    } finally {
        yield put(list.ends());
    }
}

export default function* watchFetch() {
    yield takeLatest(actions.PRODUCTS_PERFORME_FETCH, performFetch);
}