import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MdFilterList, MdArrowDropDown, MdClose } from 'react-icons/md';

import { Category, CategoryList, ItemCategory } from './styles';

import { changePositionRequest } from '~/store/modules/filter/actions';

import api from '~/services/api';

export default function Categories() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const position = useSelector(state => state.filter.position);
  const [selected, setSelected] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      setCategories(response.data.categories);
    }
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (position === null) {
      const selectedPosition = categories.find(
        category => category.positionNumber === 1
      );

      setSelected(selectedPosition);
    } else {
      const selectedPosition = categories.find(
        category => category.positionNumber === position
      );

      setSelected(selectedPosition);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handlePositionNumber(number) {
    dispatch(changePositionRequest(number));
    setVisible(!visible);
  }

  console.tron.log(selected);

  return (
    <>
      <Category>
        <div className="filterBar">
          <button type="button" onClick={handleToggleVisible}>
            <MdFilterList className="filterIcon" />
            <span>{selected ? selected.name : 'Selecione uma Categoria'}</span>
            <MdArrowDropDown className="categoryIcon" />
          </button>
        </div>
        <CategoryList visible={visible}>
          <header>
            <strong>
              <MdFilterList className="filterIcon" />
              <span>Categorias</span>
              <button type="button" onClick={handleToggleVisible}>
                <MdClose className="closeIcon" />
              </button>
            </strong>
          </header>
          <ul>
            {categories.map(category => (
              <ItemCategory
                key={String(category.id)}
                marked={
                  (!position && category.positionNumber === 1) ||
                  position === category.positionNumber
                }
              >
                <button
                  type="button"
                  onClick={() => handlePositionNumber(category.positionNumber)}
                >
                  {category.name}
                </button>
              </ItemCategory>
            ))}
          </ul>
        </CategoryList>
      </Category>
    </>
  );
}
