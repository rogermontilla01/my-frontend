import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Products from './Products';
import { getProds, getProdByPrice, getCategories } from '../Services/ProductsService';

class Home extends Component {
  constructor() {
    super();
    //Declarar el estado
    this.state = {
      products: [],
      categories: [],
      loading: true,
    };
  }
  componentDidMount() {
    this.getElements()
  }
  
  clearFilter(){
    this.getElements()
  }

  async filterProducts(min, max, category) {
    let prods = await getProdByPrice(min, max, category);
    console.log(prods);
    if (prods.data.docs != undefined) {
      this.setState({
        products: prods.data.docs,
        loading: false,
      });
    } else {
      this.setState({
        loading: true,
      });
    }
  }

  

  async getElements(){
    let prods = await getProds();
    let categ = await getCategories();
    if (prods.data.docs != undefined && categ != undefined) {
      this.setState({
        products: prods.data.docs,
        categories: categ.data,
        loading: false,
      });
      console.log(this.state);
    } else {
      this.setState({
        loading: true,
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.loading && <div>Loading ...</div>}
        {!this.state.loading && (
          <div>
            <Products
              data={this.state.products}
              filterProducts={(min, max, category) => this.filterProducts(min, max, category)}
              categories={this.state.categories}
              clearFilter={()=>this.clearFilter()}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
