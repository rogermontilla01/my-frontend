import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Products from './Products';

class Home extends Component {
  constructor() {
    super();
    //Declarar el estado
    this.state = {
      products: [],
      loading: true,
    };
  }
  componentDidMount() {
    fetch('http://localhost:3001/products/')
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            products: result['docs'],
            loading: false,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    return (
      <div>
        {this.state.loading && <div>Loading ...</div>}
        {!this.state.loading && (
          <div>
            {this.state.products.map(producto => <Products data={[producto]} />)}
          </div>
        )}
      </div>
    );
  }
}

export default Home;
