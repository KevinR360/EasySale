import { select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { formatPrice } from '~/util/format';

import {
  addToCartSuccess,
  updateAmountSuccess,
  finalizedSaleSuccess,
} from './actions';

function* addToCart({ product }) {
  const productExist = yield select(state =>
    state.cart.find(p => p.id === product.id)
  );

  const currentAmount = productExist ? productExist.amount : 0;

  const amount = currentAmount + 1;

  if (productExist) {
    yield put(updateAmountSuccess(product.id, amount));
  } else {
    const data = {
      ...product,
      amount: 1,
      priceFormated: formatPrice(product.salePrice),
    };

    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  yield put(updateAmountSuccess(id, amount));
}

function* finalizedSale({ cart }) {
  if (cart.length <= 0) {
    toast.error('Nenhum item encontrado, verifique os itens inseridos');
  } else {
    toast.success('Parabéns, a venda foi realizada com sucesso!');
  }

  console.tron.log('Chegou até aqui');
  yield put(finalizedSaleSuccess());
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
  takeLatest('@cart/FINALIZED_SALE_REQUEST', finalizedSale),
]);
