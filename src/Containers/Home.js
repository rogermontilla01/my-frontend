import React, { Component } from 'react';
import axios from 'axios';
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
    axios.get('http://localhost:3001/products/').then((res) => {
      console.log(res)
      this.setState({
        products: res.data.docs,
        loading: false,
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.loading && <div>Loading ...</div>}
        {!this.state.loading && (
          <div>
            {this.state.products.map((producto) => (
              <Products data={[producto]} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Home;
