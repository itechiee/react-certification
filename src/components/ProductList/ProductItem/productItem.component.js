import React, { Component } from 'react';

class ProductItem extends Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {

  }

  render() {

    let product = this.props.product;
    return (
      <li>
          {product.title}
      </li>
    );
  }
}

export default ProductItem;
