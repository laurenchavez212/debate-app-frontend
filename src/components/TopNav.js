import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import "../App.css";
import LoginPage from "./login/LoginPage";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
    localStorage.clear();
    window.location.href = "/";
  }

  render() {
    let isLoggedIn;
    if (
      localStorage.getItem("X-User-Token")
    ) {
      isLoggedIn = true;
    } else {
      isLoggedIn = false;
    }
    console.log(isLoggedIn)
    return (
      <div>
        {/* Navbar begins */}
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Debate App</NavbarBrand>
          <Nav className="ml-auto" navbar>
            
            {!isLoggedIn ? (
              <LoginPage />
            ) : (
                <Link to={`/profile/`}>
                  <NavItem>Profile</NavItem>
                </Link>
                
              <NavItem onClick={this.logout.bind(this)}>Logout</NavItem>
            )}

          </Nav>
        </Navbar>
        {/* Navbar ends */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { current_user: state.current_user };
};

export default connect(
  mapStateToProps,
  null
)(TopNav);
