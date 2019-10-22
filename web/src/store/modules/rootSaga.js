import { all } from 'redux-saga/effects';

import cart from './cart/sagas';
import filter from './filter/sagas';

export default function* rootSaga() {
  return yield all([cart, filter]);
}
