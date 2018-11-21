import React, {Component} from "react";
import {
    Navbar,
    Nav,
    NavItem
} from "reactstrap";
import "../App.css";

export default class BottomNav extends Component {

    render() {
        return <div>
            <Navbar color="light" light expand="md">
                <Nav className="ml-auto" navbar>
                    <NavItem>
                       Bottom Nav Bar
            </NavItem>
                </Nav>
            </Navbar>
        </div>;
    }
}
