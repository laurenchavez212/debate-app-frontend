import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "../App.css";
import LoginPage from "./login/LoginPage";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../App.css";
import { FaUser } from "react-icons/fa";

class TopNav extends Component {

  logout() {
    localStorage.clear();
    window.location.href = "/";
  }

  render() {
    let isLoggedIn;
    if (localStorage.getItem("X-User-Token")) {
      isLoggedIn = true;
    } else {
      isLoggedIn = false;
    }

    return <div>
        {/* Navbar begins */}
        <Navbar className="top-nav" color="light" light expand="md">
          <NavbarBrand href="/">
            <img className="top-nav-brand" src="/Balance.jpg" />
          </NavbarBrand>
          <NavLink>
            <h2>Balance</h2>
          </NavLink>
          <Nav className="ml-auto" navbar>
            {!isLoggedIn ? <React.Fragment>
                <LoginPage />
              </React.Fragment> : <React.Fragment>
                <Link to={`/profile/`}>
                  <NavLink className="top-nav-item">
                    <FaUser />
                    Profile
                  </NavLink>
                </Link>
                <NavLink className="top-nav-item" onClick={this.logout.bind(this)}>
                  Logout
                </NavLink>
              </React.Fragment>}
          </Nav>
        </Navbar>
        {/* Navbar ends */}
      </div>;
  }
}

const mapStateToProps = state => {
  return { current_user: state.current_user };
};

export default connect(
  mapStateToProps,
  null
)(TopNav);
