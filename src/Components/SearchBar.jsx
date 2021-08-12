import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductList from './ProductList';
import ProductInvalid from './ProductInvalid';

export default class SearchBar extends Component {
  render() {
    const { searchbar, products, state, handleClick, handleChange } = this.props;
    return (
      <div className="search-bar">
        <label
          htmlFor="home-initial-message"
          data-testid="home-initial-message"
          className="search-label"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            type="text"
            data-testid="query-input"
            id="home-initial-message"
            name="searchbar"
            value={ searchbar }
            onChange={ handleChange }
            className="search-input"
          />
        </label>
        <br />
        <button
          type="button"
          data-testid="query-button"
          onClick={ handleClick }
          className="btn"
        >
          Pesquisar
        </button>
        {products.length === 0 && state === true ? (
          <ProductInvalid />
        ) : (
          <ProductList products={ products } />
        )}
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchbar: PropTypes.string.isRequired,
  products: PropTypes.objectOf.isRequired,
  state: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
