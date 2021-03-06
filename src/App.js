import React, {Component} from 'react';
//import logo from './logo.svg';
import Products from './components/Products'
import './App.css';
import Filter from './Filter';
import Basket from './components/Basket';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {

UNSAFE_componentWillMount(){
    fetch("https://raw.githubusercontent.com/shiheb/ecommerce-shopping-cart-app-redux/master/public/db.json").then(res => res.json()).then(data => this.setState({
      payload: data.products,
      filteredProducts: data.products,
    }));

    if (localStorage.getItem("cartItems")) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems"))
      });
    }

  }

  render(){
  return (
      <Provider store={store}>
    <div className="Container ">

      <h1 className="center ">E-Commerce Shopping Cart Application</h1>
      <hr/>
      
        <div className="row ">

            <div className="col-md-9">
              <Filter  />
              <hr/>
              <div className="grid">
                <Products />
              </div>
            </div>

            <div className="col-md-3">
              <Basket /> 
            </div>

        </div>
    </div>
    </Provider>
  );
  }
}

export default App;
