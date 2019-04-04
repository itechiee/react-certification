import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addToCart } from '../../../actions/cartActions';
class ProductItem extends Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {

  }

  handleAddtoCart = (product) => {
    this.props.addToCart(product);
  }

  render() {

    let product = this.props.product;
    // console.log(product);
    return (
      <li>
      {product.id}
          {product.title}
          <button onClick={() => {this.handleAddtoCart(product)}}>Add</button>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch(addToCart(product))
    }
  }
}

export default connect(null,mapDispatchToProps)(ProductItem);
