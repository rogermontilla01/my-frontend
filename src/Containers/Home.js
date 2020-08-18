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
      pagination: [],
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

  changePage(pageNumber){
    this.getElements(pageNumber)
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

  async getElements(pageNumber) {
    let prods = await getProds(pageNumber ? pageNumber:1);
    let categ = await getCategories();
    if (prods.data.docs != undefined && categ != undefined) {
      this.setState({
        products: prods.data.docs,
        categories: categ.data,
        pagination: {
          hasNextPage: prods.data.hasNextPage,
          hasPrevPage: prods.data.hasPrevPage,
          nextPage: prods.data.nextPage,
          page: prods.data.page,
          prevPage: prods.data.prevPage,
          totalPages: prods.data.totalPages,
        },
        loading: false,
      });
      console.log(this.state);
      console.log('Data pagination: ', this.state.pagination)
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
              changePage={(pageNumber)=> this.changePage(pageNumber)}
              paginationData={this.state.pagination}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
