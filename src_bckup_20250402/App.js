import React from 'react';
import {connect} from 'react-redux';
import { Router, Link, Switch, Redirect, Route  } from 'react-router-dom';
import Routes from './routes/routes';
import Header from './views/main/header';
import Login from './views/main/login';
import CreateAccount from './views/main/createAccount';
import View from './views/main/view';
import {authenticationService} from './services/';
import {restService} from './services/';
import PublicRoute from './routes/PublicRoutes';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline'
import './AppTheme.scss';
import './App.css';

const browserHistory = createBrowserHistory();
export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isFlushed: false
    };
  }
  componentWillReceiveProps(nextProps) {
    // check current props and nextPros of dealLoaded flag. If dealLoaded was false, and is true, which means the data is fetched, then we should reset isFlushed
    if (!this.props.dealLoaded && nextProps.dealLoaded) {
      this.setState({
        isFlushed: false
      });
    }
    // since we assigned the location.state in <Link>, if we see this prop, and the data is not flushed yet, then flush data, in this case we call loadDeals(), which is a redux action
    if (!this.state.isFlushed && nextProps.location.state === 'flushDeal') {
      this.setState({
        isFlushed: true,
      }, () => this.props.loadDeals());
    }
    
  }
  render (){
  return (
    <Router history={browserHistory}>
      <Routes />
    </Router>
  ) 
}
}

