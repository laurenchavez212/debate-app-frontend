import React, {Component} from "react";
import {
    Nav,
    NavItem
} from "reactstrap";
import "../App.css";
import {Navbar, NavbarBrand} from 'reactstrap'

export default class BottomNav extends Component {

    render() {
        return <div className="bottom-nav">
            <Navbar>
            <NavbarBrand>&copy; Balance 2018</NavbarBrand>
            <hr/>
              <Nav vertical className=" ml-auto" navbar>
                <NavItem>
                  Careers 
                </NavItem>
              <br/>
                <NavItem>
                    Privacy Policy
                </NavItem>
              <br />
                <NavItem>
                    Terms of Service
                </NavItem>
              <br />
                <NavItem>
                    Contact Us
                </NavItem>
              </Nav>
            </Navbar>
          </div>;
    }
}
