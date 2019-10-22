import { takeLatest, all, put } from 'redux-saga/effects';

import { changePositionSuccess } from './actions';

export function* changePosition({ payload }) {
  const { position } = payload;

  yield put(changePositionSuccess(position));
}

export default all([
  takeLatest('@filter/CHANGE_POSITION_REQUEST', changePosition),
]);
