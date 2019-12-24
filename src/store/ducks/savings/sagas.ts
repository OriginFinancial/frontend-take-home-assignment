import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {
    // const response = yield call(api.get, 'saving-goals');
    // console.log('aqui', response);
    // yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
