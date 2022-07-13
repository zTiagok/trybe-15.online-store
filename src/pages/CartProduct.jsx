import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProduct } from '../services/api';

export default class CartProduct extends Component {
  state = {
    name: '',
    quantity: 0,
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { productID } = this.props;
    const getAPI = await getProduct(productID);
    this.setState({ name: getAPI.title });
  };

  getAPI = async (paramID) => {
    const data = await getProduct(paramID);
    // strgSplit.map(async (productID) => {
    //   this.setState({ name: data.title, quantity: 0 });
    //   console.log('linha 35', data);
    //   return [...data];
    // });
    return data;
  }

  render() {
    const { name, quantity } = this.state;
    return (
      <div
        className="cart-products"
      >
        <h2
          className="cart-product-name"
          data-testid="shopping-cart-product-name"
        >
          { name }
        </h2>
        <h3
          className="cart-product-quantity"
        >
          { quantity }
        </h3>
      </div>
    );
  }
}

CartProduct.propTypes = {
  productID: PropTypes.string,
}.isRequired;
