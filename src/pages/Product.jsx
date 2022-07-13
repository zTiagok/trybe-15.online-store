import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { getProductsFromQuery } from '../services/api';

export default class Product extends Component {
  addToLocalStorage = (id) => {
    const productID = id;
    // this.setState((prevState) => ({
    //   cartProductID: [...prevState.cartProductID, productID],
    // }));
    const prev = JSON.parse(localStorage.getItem('itemId'));
    if (prev) return localStorage.setItem('itemId', JSON.stringify([...prev, productID]));
    localStorage.setItem('itemId', JSON.stringify([productID]));
  }

  render() {
    const { location: { state: { name, image, price, id } } } = this.props;

    return (
      <div data-testid="product-detail-name">
        <div data-testid="product">
          <h2>{ name }</h2>
          <img src={ image } alt="Product" />
          <p>{` R$ ${price}`}</p>
          <button
            type="button"
            onClick={ () => (this.addToLocalStorage(id)) }
            data-testid="product-detail-add-to-cart"
          >
            Adicionar ao Carrinho!
          </button>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
}.isRequired;
