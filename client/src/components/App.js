// Root Component, setup Routes, and fetch user status on loaded
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import BottleNew from './bottles/BottleNew';
import BottleDetail from './bottles/BottleDetail';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/bottles" component={Dashboard} />
              <Route exact path="/bottles/new" component={BottleNew} />
              <Route path="/bottles/:id" component={BottleDetail} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// connect function 2nd argument wire up actions and component as props, which can be called in component
export default connect(null, actions)(App);
