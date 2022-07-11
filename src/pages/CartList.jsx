import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartProduct from './CartProduct';

export default class CartList extends Component {
  render() {
    const { location: { state: { array } } } = this.props;

    return (
      <>
        {array.map((id) => (<CartProduct
          productID={ id }
          key={ id }
          productArray={ array }
        />))}

        {/* {array.map((id) => (<CartProduct
          productName={getProduct(id)
            .then((data) => console.log(data.title))}
          key={id}
        />))} */}

        {array.length
          ? null
          : <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>}
      </>
    );
  }
}

CartList.propTypes = {
  array: PropTypes.array,
}.isRequire;
