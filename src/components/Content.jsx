import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CartList from '../pages/CartList';
import Product from '../pages/Product';

export default class Content extends Component {
  render() {
    return (
      <Switch>
        <Route path="/cart" component={ CartList } />
        <Route path="/product/:id" component={ Product } />
      </Switch>
    );
  }
}
