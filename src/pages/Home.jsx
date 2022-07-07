import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Content from '../components/Content';
import { getCategories } from '../services/api';

export default class Home extends Component {
  state = {
    inputValue: '',
    categoriesArray: [],
  }

  async componentDidMount() {
    const categories = await getCategories();

    this.setState({ categoriesArray: categories });
  }

  onChangeEvent = ({ target }) => {
    this.setState({
      inputValue: target.value,
    });
  }

  createCategory = (category) => (
    <button type="button" data-testid="category" key={ category.id }>
      { category.name }
    </button>
  );

  render() {
    const { inputValue, categoriesArray } = this.state;
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
        <div id="home-categories">
          {categoriesArray.map((category) => this.createCategory(category))}
        </div>
      </div>
    );
  }
}
