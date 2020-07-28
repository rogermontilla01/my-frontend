import React, { Component } from 'react';
import { getProdById } from '../Services/ProductsService';
import ProdsDetail from '../Components/ProdsDetail'

export default class ShowProds extends Component {
  constructor() {
    
    super();
    //Declarar el estado
    this.state = {
      products: [],
      loading: true
    };
  }
  async componentDidMount() {
    let id = this.props.match.params.id
    let prods = await getProdById(id);
    console.log('PRODS',prods)
    if (prods.data.id != undefined) {
      this.setState({
        products: prods.data,
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
          {!this.state.loading && <ProdsDetail data={this.state.products}/>}
      </div>
    )
  }
}

