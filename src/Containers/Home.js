import React, { Component } from 'react';
import Products from './Products';
import { getProds, getProdByPrice, getCategories, globalSearch } from '../Services/ProductsService';

class Home extends Component {
  constructor(props) {
    super();
    //Declarar el estado
    this.state = {
      products: [],
      categories: [],
      prodSearch: '',
      reloadSearch: false,
      loading: true,
    };
  }

  componentDidMount() {
    this.getElements();
  }

  componentDidUpdate() {
    if(localStorage.getItem('search') !== undefined && localStorage.getItem('search') !== ""){
      this.productsSearch(localStorage.getItem('search'))
    }
  }

  clearFilter() {
    this.getElements();
  }

  async productsSearch(name) {
    let prods = await globalSearch(name);
    console.log('Prods: ', prods);
    this.setState({products: prods.data.products})
    localStorage.setItem('search', "")
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

  async getElements() {
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
              clearFilter={() => this.clearFilter()}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
