import React, { Component } from 'react';
import './App.css';
import Home from './Containers/Home';
import Login from './Containers/Login';
import ShowProds from './Containers/ShowProds';
import Menu from './Layout/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from './Containers/Signup';
import GlobalState from './Context/GlobalState';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      menuOptions: [],
    };
  }

  render() {
    return (
      <div>
        <GlobalState>
          <BrowserRouter>
            <Route component={() => <Menu data={this.state.menuOptions} />} />
            {/* Se coloca una function arrow para poder pasarle parametros al componente */}
            <Route path="/" exact component={() => <Home />} />
            <Route path="/login" exact component={() => <Login></Login>} />
            <Route path="/signup" exact component={() => <Signup />}></Route>
            <Route path="/prods-detail/:id" exact component={ShowProds}/>
          </BrowserRouter>
        </GlobalState>
      </div>
    );
  }
}
