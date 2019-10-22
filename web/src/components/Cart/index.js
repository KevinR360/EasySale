/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  MdAddCircle,
  MdRemoveCircle,
  MdClose,
  MdRemoveShoppingCart,
  MdShoppingCart,
  MdDeleteForever,
} from 'react-icons/md';

import * as CartActions from '~/store/modules/cart/actions';

import {
  Container,
  Infos,
  ListItens,
  Item,
  TopCart,
  ButtonCart,
} from './styles';

import { formatPrice } from '~/util/format';
import { Discount } from '~/util/discount';
import { Taxa } from '~/util/taxa';

export default function Cart() {
  const dispatch = useDispatch();
  const cartSize = useSelector(state => state.cart.length);
  const [cart, setCart] = useState([]);
  const [totalFinal, setTotalFinal] = useState(0);
  const [discount, setDiscount] = useState(null);
  const [taxa, setTaxa] = useState(null);
  const [visibleCart, setVisibleCart] = useState(false);
  const totalValue = useSelector(state =>
    state.cart.reduce((totalSum, product) => {
      return totalSum + product.salePrice * product.amount;
    }, 0)
  );
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.salePrice * product.amount;
      }, 0)
    )
  );
  const data = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.salePrice * product.amount),
    }))
  );

  async function verifyCart() {
    if (data.length <= 0) {
      setTaxa(null);
      setDiscount(null);
      setCart([]);
    } else {
      setCart(data);
    }
  }

  useEffect(() => {
    verifyCart();
  }, [data, verifyCart]);

  useEffect(() => {
    const totalDiscont = Discount(totalValue, discount);
    const totalTaxa = Taxa(totalValue, taxa);

    const valorFinal = totalValue - totalDiscont + totalTaxa;

    setTotalFinal(formatPrice(valorFinal));
  }, [totalValue, taxa, discount]);

  function handleToggleVisible() {
    setVisibleCart(!visibleCart);
  }

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function handleRemoveFromCart(product) {
    dispatch(CartActions.removeFromCart(product.id));
  }

  function handleFinalizedSale(cartValues) {
    dispatch(CartActions.finalizedSaleRequest(cartValues));
    verifyCart();
  }

  return (
    <Container visibleCart={visibleCart}>
      <ButtonCart type="button" onClick={handleToggleVisible}>
        <span className="cartSize">{cartSize}</span>
        <MdShoppingCart className="cartIcon" />

        <strong>Meus Itens</strong>
      </ButtonCart>

      <div className="Cart">
        <TopCart>
          <span>Meus Itens</span>
          <button type="button" onClick={handleToggleVisible}>
            <MdClose />
          </button>
        </TopCart>
        <ListItens>
          {cart.length > 0 ? (
            cart.map(product => (
              <Item>
                <header>
                  <strong className="title">{product.name}</strong>
                  <form className="formItem">
                    <div className="qtd">
                      <span>Qtd:</span>
                      <button type="button" onClick={() => increment(product)}>
                        <MdAddCircle />
                      </button>
                      <input type="number" readOnly value={product.amount} />
                      <button type="button" onClick={() => decrement(product)}>
                        <MdRemoveCircle />
                      </button>
                    </div>
                    <button
                      type="button"
                      className="exclude"
                      onClick={() => handleRemoveFromCart(product)}
                    >
                      <MdDeleteForever />
                    </button>
                  </form>
                </header>
                <strong className="StrongPrice">
                  <span className="price">{product.priceFormated}</span>
                  <span className="Subtotal">{product.subtotal}</span>
                </strong>
              </Item>
            ))
          ) : (
            <aside className="emptyCart">
              {' '}
              <MdRemoveShoppingCart />{' '}
            </aside>
          )}
        </ListItens>
        <Infos>
          <form>
            <div>
              <span>Subtotal:</span>
              <p>{total}</p>
            </div>
            <div>
              <span>Desconto:</span>
              <input
                type="number"
                placeholder="%"
                name="discount"
                value={discount}
                onChange={e => setDiscount(e.target.value)}
              />
            </div>
            <div>
              <span>Taxa de Serviço:</span>
              <input
                type="number"
                placeholder="%"
                name="taxa"
                value={taxa}
                onChange={e => setTaxa(e.target.value)}
              />
            </div>
            <div>
              <span>Total:</span>
              <strong className="total">{totalFinal}</strong>
            </div>
          </form>
          <button type="button" onClick={() => handleFinalizedSale(cart)}>
            Finalizar Venda
          </button>
        </Infos>
      </div>
    </Container>
  );
}
