import React, { Component } from 'react';
import './App.css';
import Home from './Containers/Home';
import Login from './Containers/Login';
import ShowProds from './Containers/ShowProds';
import Menu from './Layout/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from './Containers/Signup';
import GlobalState from './Context/GlobalState';
import Checkout from './Containers/Checkout'
import ToastMessage from './Components/ToastMessage';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    return (
      <div>
        <GlobalState>
          <BrowserRouter>
            <Route component={() => <Menu/>} />
            <Route component={() =><ToastMessage/>} />
            {/* Se coloca una function arrow para poder pasarle parametros al componente */}
            <Route path="/" exact component={() => <Home />} />
            <Route path="/login" exact component={() => <Login></Login>} />
            <Route path="/signup" exact component={() => <Signup />}></Route>
            <Route path="/prods-detail/:id" exact component={ShowProds}/>
            <Route path='/checkout' exact component={Checkout}/>
          </BrowserRouter>
        </GlobalState>
      </div>
    );
  }
}
