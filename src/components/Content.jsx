import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CartList from '../pages/CartList';

export default class Content extends Component {
  render() {
    return (
      <Switch>
        <Route path="/cart" component={ CartList } />
      </Switch>
    );
  }
}
