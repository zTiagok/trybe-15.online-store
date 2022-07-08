import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Content from '../components/Content';
import { getCategories,
  getProductsFromQuery,
  getProductsFromCategory } from '../services/api';
// import CartList from './CartList';
import ItemsList from '../components/ItemsList';

export default class Home extends Component {
  state = {
    inputValue: '',
    categoriesArray: [],
    searchReturn: undefined,
    notFound: '',
    categoryID: [],
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

  getCategoryID = async (id) => {
    const response = await getProductsFromCategory(id);
    const { results } = response;

    this.setState({ categoryID: results });
  }

  createCategory = (category) => (
    <button
      type="button"
      data-testid="category"
      key={ category.id }
      onClick={ () => this.getCategoryID(category.id) }
      className="categories-buttons"
    >
      { category.name }
    </button>
  );

  searchItems = async () => {
    const { inputValue } = this.state;
    const categories = await getProductsFromQuery(inputValue);
    const { results } = categories;
    this.setState({ searchReturn: results });
    if (results.length === 0) {
      this.setState({ notFound: 'Nenhum produto foi encontrado.' });
    }
  }

  render() {
    const { inputValue, categoriesArray, searchReturn, notFound,
      categoryID } = this.state;

    const emptyMessage = (
      <p id="home-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );

    const homeSearch = (
      <div id="home-list">
        <input
          type="text"
          id="search-input"
          value={ inputValue }
          onChange={ this.onChangeEvent }
          data-testid="query-input"
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.searchItems }
        >
          Pesquisar
        </button>
        { searchReturn ? (
          <div>
            <h2>{notFound}</h2>
            {searchReturn.map((item, index) => (
              <ItemsList
                key={ index }
                itemName={ item.title }
                itemImage={ item.thumbnail }
                itemPrice={ item.price }
                data-testid="product"
              />
            ))}
          </div>
        ) : emptyMessage}
      </div>
    );

    return (
      <main data-testid="home-initial-message">

        {/* LINKS NA HOMEPAGE */}
        <nav>
          <Link to="/cart" data-testid="shopping-cart-button" className="links">
            Carrinho de Compras.
          </Link>
        </nav>
        {/* ----------------- */}

        <Content />

        <div id="home-products">
          {categoriesArray.map((category) => this.createCategory(category))}
        </div>
        <div id="home-categories">
          {categoryID.map((item, index) => (
            <ItemsList
              key={ index }
              itemName={ item.title }
              itemImage={ item.thumbnail }
              itemPrice={ item.price }
            />
          ))}
        </div>

        {homeSearch}
      </main>
    );
  }
}
