import { call, put } from 'redux-saga/effects';
// import { push } from 'connected-react-router';
import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {
    const response = yield call(api.get, 'saving-goals');
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
