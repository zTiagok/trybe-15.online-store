import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemsList extends Component {
  render() {
    const {
      itemName,
      itemImage,
      itemPrice,
    } = this.props;
    return (
      <div data-testid="product">
        <h2>{ itemName }</h2>
        <img src={ itemImage } alt="Product" />
        <p>{` R$ ${itemPrice}`}</p>
      </div>
    );
  }
}

ItemsList.propTypes = {
  itemName: PropTypes.string,
}.isRequired;
