import React, { Component } from 'react';
import './App.css';
import Home from './Containers/Home';
import Login from './Containers/Login';
import Menu from './Layout/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from './Containers/Signup';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      menuOptions: [
        {
          path: '/',
          label: 'Home',
        },
        {
          path: '/login',
          label: 'Login',
        },
        {
          path: '/signup',
          label:'Signup'
        }
      ],
    };
  }

  handleMenu = (login)=>{
    if(login){
      this.setState({menuOptions:[
        {
          path: '/',
          label: 'Home',
        }
      ]})
    }else{
      this.setState({menuOptions:[
        {
          path: '/',
          label: 'Home',
        },
        {
          path: '/login',
          label: 'Login',
        },
        {
          path: '/signup',
          label:'Signup'
        }
      ]})
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route component={() => <Menu data={this.state.menuOptions} />} />
          {/* Se coloca una function arrow para poder pasarle parametros al componente */}
          <Route path="/" exact component={() => <Home />} />
          <Route path="/login" exact component={()=><Login menuHandle={this.handleMenu}/>} />
          <Route path="/signup" exact component={Signup}></Route>
        </BrowserRouter>
      </div>
    );
  }
}
