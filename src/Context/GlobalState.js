import React, { Component } from 'react';
import NetContext from './NetContext';

class GlobalState extends Component {

  state = {
    login: localStorage.getItem('login'),
  };
  loginUser = data => {
    this.setState({
      login: true
    });
    localStorage.setItem('login', true);
  };
  logoutUser = data => {
    this.setState({
      login: false,
    });
    localStorage.removeItem('login');
  };
  addProd = data => {
    this.setState({
      productsList: []
    })
  }

  render() {
    return (
      <NetContext.Provider value={{ login: this.state.login, loginUser: this.loginUser, logoutUser: this.logoutUser }}>
        {this.props.children}
      </NetContext.Provider>
    );
  }
}

export default GlobalState;
