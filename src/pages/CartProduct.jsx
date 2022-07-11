import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProduct } from '../services/api';

export default class CartProduct extends Component {
  state = {
    name: '',
    quantity: '',
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { productID, productArray } = this.props;
    const data = await getProduct(productID);
    let quantityItens = 0;

    const productFiltered = productArray.filter((element) => {
      if (element === productID) {
        quantityItens += 1;
      }
    });

    console.log(productFiltered);
    // console.log(productArray);
    // console.log(productID);

    this.setState({ name: data.title, quantity: quantityItens });
  };

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
          data-testid="shopping-cart-product-quantity"
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
