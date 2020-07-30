import React, { Component } from 'react';
import NetContext from './NetContext';

class GlobalState extends Component {
  state = {
    productsList: [],
    login: localStorage.getItem('login'),
  };
  loginUser = (data) => {
    this.setState({
      login: true,
    });
    localStorage.setItem('login', true);
  };
  logoutUser = (data) => {
    this.setState({
      login: false,
    });
    localStorage.removeItem('login');
  };
  addProd = (data) => {
    this.setState({
      productsList: [...this.state.productsList, data],
    });
    console.log('Statate=>', this.state.productsList);
  };

  render() {
    return (
      <NetContext.Provider
        value={{
          login: this.state.login,
          productsList: this.state.productsList,
          loginUser: this.loginUser,
          logoutUser: this.logoutUser,
          addProd: this.addProd,
        }}
      >
        {this.props.children}
      </NetContext.Provider>
    );
  }
}

export default GlobalState;
