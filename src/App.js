import React, { Component } from 'react';
import './App.css';
import Home from './Containers/Home';
import Login from './Containers/Login';
import ShowDetail from './Containers/ShowDetail';
import Menu from './Layout/Menu';
import Footer from './Layout/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from './Containers/Signup';
import UserPanel from './Containers/UserPanel';
import GlobalState from './Context/GlobalState';
import Checkout from './Containers/Checkout';
import ToastMessage from './Components/ToastMessage';
import AboutContainer from './Containers/AboutContainer';
import HistoryContainer from './Containers/HistoryContainer';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <GlobalState>
          <BrowserRouter>
            <Route component={() => <Menu />} />
            <Route component={() => <ToastMessage />} />
            {/* Se coloca una function arrow para poder pasarle parametros al componente */}
            <Route path="/" exact component={() => <Home />} />
            <Route path="/user-panel" exact component={() => <UserPanel></UserPanel>} />
            <Route path="/login" exact component={() => <Login></Login>} />
            <Route path="/signup" exact component={() => <Signup />}></Route>
            <Route path="/prods-detail/:id" exact component={ShowDetail} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/about" exact component={AboutContainer} />
            <Route path="/history" exact component={HistoryContainer} />
            <Route component={() => <Footer></Footer>} />
          </BrowserRouter>
        </GlobalState>
      </div>
    );
  }
}
