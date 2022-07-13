import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartProduct from './CartProduct';

export default class CartList extends Component {
  state = {
    arrayIDs: [],
  }

  componentDidMount() {
    this.renderProducts();
  }

  renderProducts = () => {
    const itemsIDs = localStorage.getItem('itemId');
    const filteredIDs = JSON.parse(itemsIDs);
    this.setState({ arrayIDs: filteredIDs });

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
    // const arrayToString = productArray.toString();
    // let conc = 0;
    // itemsIDs.map((id) => {
    //   const data = this.getAPI(id);

    //   if (id === arrayToString) {
    //     conc += 1;
    //     this.setState({ quantity: conc });
    //   }
    //   this.setState({ name: data.title });
    // });
    // const arrayFiltred = itemsIDs.filter((element) => element !== arrayToString);
    // ;
  }

  render() {
    const { arrayIDs } = this.state;
    const arrayLengthMessage = (
      <div data-testid="shopping-cart-product-quantity">
        {`Quantidade ${arrayIDs.length}`}
      </div>
    );

    return (
      <>
        {arrayIDs.map((id, index) => (<CartProduct
          productID={ id }
          key={ index }
        />))}

        {/* {array.map((id) => (<CartProduct
          productName={getProduct(id)
            .then((data) => console.log(data.title))}
          key={id}
        />))} */}

        {arrayIDs.length
          ? arrayLengthMessage
          : <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>}
      </>
    );
  }
}

CartList.propTypes = {
  array: PropTypes.array,
}.isRequire;
