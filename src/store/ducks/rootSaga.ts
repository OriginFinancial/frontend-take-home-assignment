import { all, takeLatest } from 'redux-saga/effects';
import { SavingsTypes } from './savings/types';
import { load } from './savings/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(SavingsTypes.LOAD_REQUEST, load)]);
}
