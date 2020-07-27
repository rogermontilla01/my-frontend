import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Products from "./Products";
import { getProds } from "../Services/ProductsService";

class Home extends Component {
  constructor() {
    super();
    //Declarar el estado
    this.state = {
      products: [],
      loading: true
    };
  }
  async componentDidMount() {
    let prods = await getProds();
    if (prods.data.docs != undefined) {
      this.setState({
        products: prods.data.docs,
        loading: false
      });
    } else {
      this.setState({
        loading: true
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.loading && <div>Loading ...</div>}
        {!this.state.loading && (
          <div>
            <Products data={this.state.products} />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
