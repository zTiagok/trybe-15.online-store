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
    this.getLocalStorage();
  }

  fetchData = async () => {
    const { productArray } = this.props;
    const itemsIDs = this.getLocalStorage();
    // console.log('linha 19', itemsIDs);
    // itemsIDs.reduce((acc, element) => {
    //   if (element === acc) {
    //     this.setState((prevState) => ({
    //       quantity: [...prevState.quantity, +1],
    //     }));
    //     // return quantityItens;
    //   }
    //   return acc;
    // });
    const arrayToString = productArray.toString();
    let conc = 0;
    itemsIDs.map((id) => {
      const data = this.getAPI(id);

      if (dataElement === arrayToString) {
        conc += 1;
        this.setState({ quantity: conc });
      }
      this.setState({ name: data.title });
    });
    // const arrayFiltred = itemsIDs.filter((element) => element !== arrayToString);
    // ;
  };

  getLocalStorage = () => {
    const localStrg = localStorage.getItem('itemId');
    const strgSplit = localStrg.split(',');
    strgSplit.shift();
    return strgSplit;
  }

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
