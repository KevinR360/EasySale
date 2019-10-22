import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../components/Header';
import Cart from '../../components/Cart';
import Categories from '../../components/Categories';
import { formatPrice } from '~/util/format';
import api from '~/services/api';

import { addToCartRequest } from '~/store/modules/cart/actions';

import { Container, Menu } from './styles';

export default function Home() {
  const dispatch = useDispatch();
  // const [cartVisible, setCartVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const filterPosition = useSelector(state => state.filter.position);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const response = await api.get('products');

      let data = null;

      if (filterPosition === null) {
        data = response.data.products.filter(
          product => product.category.positionNumber === 1
        );
      } else {
        data = response.data.products.filter(
          product => product.category.positionNumber === filterPosition
        );
      }

      data = data.map(item => ({
        ...item,
        priceFormated: formatPrice(item.salePrice),
      }));

      setProducts(data);

      setLoading(false);
    }
    loadProducts();
  }, [filterPosition]);

  function handleAddToCart(product) {
    dispatch(addToCartRequest(product));
  }

  return (
    <Container>
      <Header />

      <Menu>
        <Categories />
        <div className="menuList">
          <ul>
            {loading ? (
              <li>
                <h4>Carregando....</h4>
              </li>
            ) : (
              products.map(product => (
                <li key={String(product.id)}>
                  <button
                    type="button"
                    onClick={() => handleAddToCart(product)}
                  >
                    <img
                      src={
                        product.photo
                          ? product.photo
                          : 'https://api.adorable.io/avatars/70/abott@adorable.png'
                      }
                      alt=""
                    />
                    <strong>
                      <span>{product.name}</span>
                      <p>{product.description}</p>
                      <span className="price">{product.priceFormated}</span>
                    </strong>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
        <Cart />
      </Menu>
    </Container>
  );
}
