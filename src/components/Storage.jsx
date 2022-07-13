import React, { Component } from 'react';

export default class Storage extends Component {
  render() {
    const { productID } = this.props;
    return (
      <>
        ID
        { console.log(this.props) }
        <h2>{productID}</h2>
      </>
    );
  }
}
