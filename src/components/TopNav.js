import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Modal } from "reactstrap";
import "../App.css";
import LoginPage from "./login/LoginPage";
import {Link} from 'react-router-dom'

export default class TopNav extends React.Component {
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

  render() {
    return <div>
        {/* Navbar begins */}
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Debate App</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <Link to="/watching">
              <NavItem>Watching</NavItem>
            </Link>
            <NavItem onClick={this.toggle.bind(this)}>
              Login/Sign up
            </NavItem>
          </Nav>
        </Navbar>
        {/* Navbar ends */}

        {/* Login Modal Begins */}
        <div className="myModal">
          <Modal isOpen={this.state.modal} toggle={this.toggle} className="myModal">
            <LoginPage />
          </Modal>
        </div>
        {/* Modal Ends */}
      </div>;
  }
}
