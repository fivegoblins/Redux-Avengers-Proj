import React, { Component } from 'react';
import {Route, NavLink, withRouter} from 'react-router-dom';

import HomeView from './views/HomeView';
import AvengerListView from './views/AvengerListView';
import AvengerView from './views/AvengerView';
import AvengerFormView from './views/AvengerFormView';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className='navBar'>
          <li>
            <NavLink exact to='/' activeClassName='activeNavBtn'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/avengers' activeClassName='activeNavBtn'>
              Avengers
            </NavLink>
          </li>
          <li>
           <NavLink to='/avenger-form' activeClassName='activeNavBtn'>
              Add New
            </NavLink>
          </li>
        </ul>
        <Route exact path='/' component={HomeView}/>
        <Route exact path='/avengers' component={AvengerListView}/>
        <Route path='/avengers/:avengerId' component={AvengerView}/>
        <Route path='/avenger-form' component={AvengerFormView}/>
      </div>
    );
  }
}

export default App;
