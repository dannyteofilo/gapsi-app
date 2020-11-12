import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import './App.css';
import { Provider } from 'react-redux';
import { getStore } from './shared/redux/store';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Login from 'login'
import GuardedRoute from 'hocs';
import Layout from 'layout'




const theme = createMuiTheme({
  palette: {
    primary: { main: '#e0e0e0' },
    secondary: { main: '#64b5f6' }
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={getStore()}>
        <MuiThemeProvider theme={theme}>
          <HashRouter>
            <Switch>
              <Route path='/auth/login' component={Login} />
              <GuardedRoute path='/' component={Layout} />
            </Switch>
          </HashRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
