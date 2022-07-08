import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ItemsList extends Component {
  render() {
    const {
      itemName,
      itemImage,
      itemPrice,
      itemID,
      itemFunction,
    } = this.props;

    return (
      // <Link
      //   to={ `/product/${itemID}` }
      //   onClick={ itemFunction }
      //   data-testid="product-detail-link"
      // >
      <Link
        to={ {
          pathname: `/product/${itemID}`,
          state: { name: itemName, image: itemImage, price: itemPrice, id: itemID },
        } }
        onClick={ itemFunction }
        data-testid="product-detail-link"
      >
        <div data-testid="product">
          <h2>{ itemName }</h2>
          <img src={ itemImage } alt="Product" />
          <p>{` R$ ${itemPrice}`}</p>
        </div>
      </Link>
    );
  }
}

ItemsList.propTypes = {
  itemName: PropTypes.string,
}.isRequired;
