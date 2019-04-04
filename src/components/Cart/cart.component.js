import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from  '../Cart/CartItem/cartItem.component';

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.getCartProducts();
  }

  render() {

    const { cartProduct }  = this.props;
   console.log(cartProduct);

    return (
      <div className="container">
      <small><b>Your cart:</b></small>
        <ul>
            { cartProduct.cartProduct.map(cartItem => <CartItem product={cartItem} key={CartItem.id}  />) }
         </ul>
      </div>
    );
  }  
}

const mapStateToProps = (state) => {
  return {
    cartProduct: state.cart
  }
}



export default connect(mapStateToProps)(Cart);
