import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux';
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";


class App extends Component {
  componentDidMount() {
    if (window.location.pathname !== '/' && window.location.pathname !== '/register' && !this.props.token) {
      // console.log(this.props.token);
      // window.location.href = '/';
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/home' component={Home} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({ userReducer, errors }) => ({ token: userReducer.token, errors })
export default withRouter(connect(mapStateToProps)(withRouter(App)));
