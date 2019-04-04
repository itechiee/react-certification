import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartItem extends Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
  }

  render() {

    let product = this.props.product;
    console.log(product);
    return (
      <li>
          <p>Name: {product.title}</p>
          <p>Price: RM{product.price}</p>
      </li>
    );
  }
}



export default CartItem;
