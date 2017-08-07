import React, { Component } from 'react';
import './index.css';
import './bootstrap.min.css';
import Menu from './components/menu'
import {Route, Router,Redirect, IndexRoute} from 'react-router'
import Caso from './components/caso'
import {history} from './store'
import {Provider} from 'react-redux'
import store from './store'
import Inicio from './components/inicio'

// var ReactGA = require('react-ga');
// ReactGA.initialize('UA-102773432-1');

// ReactGA.initialize('UA-000000-01', {
//   debug: true,
//   titleCase: false,
//   gaOptions: {
//     userId: 123
//   }
// });

// function logPageView() {
//   ReactGA.set({ page: window.location.pathname + window.location.search });
//   ReactGA.pageview(window.location.pathname + window.location.search);
// }

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
	      <Router history={history} onUpdate={/*logPageView*/}>
          <Route path="/" component={Menu}>
          	<IndexRoute component={Caso} />
            <Route path="cadastro" component={Cadastro} />
          </Route>
          <Redirect from='*' to='/' />
	      </Router>
      </Provider>
    );
  }
}