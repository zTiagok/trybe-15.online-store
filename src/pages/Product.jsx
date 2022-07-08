import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { getProductsFromQuery } from '../services/api';

export default class Product extends Component {
  render() {
    const { location: { state: { name, image, price, id } } } = this.props;

    return (
      <div data-testid="product-detail-name">
        <div data-testid="product">
          {console.log(this.props)}
          <h2>{ name }</h2>
          <img src={ image } alt="Product" />
          <p>{` R$ ${price}`}</p>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  itemName: PropTypes.string,
  itemImage: PropTypes.string,
  itemPrice: PropTypes.string,
}.isRequired;
