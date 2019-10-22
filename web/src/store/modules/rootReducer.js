import { combineReducers } from 'redux';

import cart from './cart/reducer';
import filter from './filter/reducer';

export default combineReducers({
  cart,
  filter,
});
