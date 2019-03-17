import React, { Component } from 'react';
import ProductItem from  '../ProductList/ProductItem/productItem.component';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/cartActions';

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  render() {

    // let products = [
    //                   {"id": 1, "title": "TV", "price": 11500.01, "inventory": 5},
    //                   {"id": 2, "title": "Fridge", "price": 11110.99, "inventory": 20},
    //                   {"id": 3, "title": "Mobile", "price": 1119.99, "inventory": 5}
    //               ];

    const { products } = this.props;
    console.log(products);
    if(products.length === 0 ) {
      return (
          <p> No product found... </p>
        )
    }

    return (
      <div className="container">
        <ul>
            { products.map(productItem => <ProductItem product={productItem} key={productItem.id}  />) }
         </ul>
      </div>
    );
  }  
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch(getProducts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
