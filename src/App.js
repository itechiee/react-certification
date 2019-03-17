import React, { Component } from 'react';
import './App.css';
import Header from './components/Shared/Header/header.component';
import Footer from './components/Shared/Footer/footer.component';
import ProductList from './components/ProductList/productList.component';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProductList />
        <Footer />
      </div>
    );
  }
}

export default App;
