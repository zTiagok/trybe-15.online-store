import React, { Component } from 'react';

export default class CartList extends Component {
  render() {
    return (
      <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
    );
  }
}
