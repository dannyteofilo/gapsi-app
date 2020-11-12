import { fork,all } from 'redux-saga/effects';
import login from 'login/redux/saga';
import welcome from 'views/welcome/redux/saga';


export default function* rootSaga() {
    yield all([
        fork(login),
        fork(welcome),
    ]);
}