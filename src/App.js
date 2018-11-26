import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import Home from "./components/Home";
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
import NewTopicForm from "./components/topics/NewTopicForm";
import TopicPage from "./components/topics/TopicPage";

import LoginPage from "./components/login/LoginPage";

import {userLogin} from './redux/actions/userActions';

class App extends Component {
  componentDidMount() {
    if (
      window.location.pathname !== "/" &&
      window.location.pathname !== "/register" &&
      !this.props.token
    ) {}
  }

  render() {
    return <div>
        <TopNav />
        <Switch>
          <Route path="/topics/new" component={NewTopicForm} />
          <Route path="/topics/:id" component={TopicPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/" component={Home} />
        </Switch>
        <BottomNav />
      </div>;
  }
}
const mapStateToProps = ({ userReducer }) => ({
  token: userReducer.token
});

const mapDispatchToProps = {
  userLogin
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(App))
);
