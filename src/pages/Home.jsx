import React, { Component } from 'react';

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
      <div id="home-list" data-testid="home-initial-message">
        <input
          type="text"
          id="search-input"
          onChange={ this.onChangeEvent }
        />
        { !inputValue.length
          && emptyMessage}
      </div>
    );
  }
}
