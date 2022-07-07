import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Content from '../components/Content';

export default class Home extends Component {
  state = {
    inputValue: '',
  }

  onChangeEvent = ({ target }) => {
    this.setState({
      inputValue: target.value,
    });
  }

  render() {
    const { inputValue } = this.state;
    const emptyMessage = (
      <p id="home-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );

    return (
      <div data-testid="home-initial-message">

        {/* LINKS NA HOMEPAGE */}
        <Link to="/cart" data-testid="shopping-cart-button">
          Carrinho de Compras
        </Link>

        <Content />

        <div id="home-list">
          <input
            type="text"
            id="search-input"
            onChange={ this.onChangeEvent }
          />
          { !inputValue.length
              && emptyMessage}
        </div>
      </div>
    );
  }
}
