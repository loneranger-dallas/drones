import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from "./components/dashboard/dashboardPage";
import PageNotFound from "./PageNotFound";
import "./App.css";

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route
            path='/'
            render={props => <DashboardPage {...props} />}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;