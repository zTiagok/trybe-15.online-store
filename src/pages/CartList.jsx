import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartProduct from './CartProduct';

export default class CartList extends Component {
  state = {
    arrayIDs: null,
  }

  componentDidMount() {
    this.renderProducts();
  }

  renderProducts = () => {
    const itemsIDs = localStorage.getItem('itemId');
    const filteredIDs = JSON.parse(itemsIDs);
    this.setState({ arrayIDs: filteredIDs });
  }

  render() {
    const { arrayIDs } = this.state;

    if (arrayIDs) {
      this.arrayLengthMessage = (
        <div data-testid="shopping-cart-product-quantity">
          {`Quantidade ${arrayIDs.length}`}
        </div>
      );
    }

    return (
      <>
        {arrayIDs
        && arrayIDs.map((id, index) => (<CartProduct
          productID={ id }
          key={ index }
        />))}

        {arrayIDs
        && arrayIDs.length
          ? this.arrayLengthMessage
          : <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>}
      </>
    );
  }
}

CartList.propTypes = {
  array: PropTypes.array,
}.isRequire;
