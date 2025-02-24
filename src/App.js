import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './Pages/ShoppingCart';
import ProductDetails from './Pages/ProductDetails';
import ProductsLibrary from './Pages/ProductsLibrary';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={ ProductsLibrary }
            />
            <Route
              exact
              path="/shoppingcart"
              render={ (props) => <ShoppingCart { ...props } /> }
            />
            <Route
              exact
              path="/:id"
              render={ (props) => <ProductDetails { ...props } /> }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
