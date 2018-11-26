import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Modal } from "reactstrap";
import "../App.css";
import LoginPage from "./login/LoginPage";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  logout() {
    localStorage.removeItem("X-User-Token");
    localStorage.removeItem("X-User-Email");
    window.location.href = "/";
  }

  render() {
    let isLoggedIn;
    if (localStorage.getItem("X-User-Token") && 
      localStorage.getItem("X-User-Email") 
    ) {
      isLoggedIn = true;
    } else {
      isLoggedIn = false;
    }
    return <div>
        {/* Navbar begins */}
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Debate App</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <Link to={`/profile/`}>
              <NavItem>Profile</NavItem>
            </Link>
            {!isLoggedIn ?
                <LoginPage /> : <NavItem onClick={this.logout.bind(this)}>
                Logout
              </NavItem>}
          </Nav>
        </Navbar>
        {/* Navbar ends */}
      </div>;
  }
}

const mapStateToProps = state => {
  console.log("state in mstp", state);
  return {
    // user: state.topics
  };
};

export default connect(
  mapStateToProps, null
)(TopNav);
