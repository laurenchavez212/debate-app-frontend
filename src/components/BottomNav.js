import React, {Component} from "react";
import {
    Nav,
    NavItem
} from "reactstrap";
import "../App.css";
import {NavLink, Navbar, NavbarBrand} from 'reactstrap'

export default class BottomNav extends Component {

    render() {
        return <div className="bottom-nav">
            <Navbar>
              <NavbarBrand>Balance</NavbarBrand>
              <Nav vertical className=" ml-auto" navbar>
                <NavLink href="#">Link</NavLink>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#">
                    Disabled Link
                  </NavLink>
                </NavItem>
              </Nav>
            </Navbar>
          </div>;
    }
}
