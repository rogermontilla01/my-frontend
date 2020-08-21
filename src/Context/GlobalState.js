import React, { Component } from 'react';
import NetContext from './NetContext';



class GlobalState extends Component {
  state = {
    login: localStorage.getItem('login'),
    showToast: false,
    eventToast: '',
  };
  loginUser = (data) => {
    this.setState({
      login: true,
    });
    localStorage.setItem('login', true);
  };
  logoutUser = () => {
    this.setState({
      login: false,
    });
    localStorage.removeItem('login');
    localStorage.removeItem('user_id');
    localStorage.removeItem('token')
  };
  setToast = (eventToast)=>{
    this.setState({
      showToast: eventToast.showToast,
      eventToast: eventToast.eventToast,
    })
  }


  render() {
    return (
      <NetContext.Provider
        value={{
          login: this.state.login,
          loginUser: this.loginUser,
          logoutUser: this.logoutUser,
          setToast: this.setToast,
          showToast: this.state.showToast,
          eventToast: this.state.eventToast,
        }}
      >
        {this.props.children}
      </NetContext.Provider>
    );
  }
}

export default GlobalState;
