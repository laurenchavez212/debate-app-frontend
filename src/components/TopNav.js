import React from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    Input
} from "reactstrap";
import { Link } from 'react-router-dom';
import "../App.css";


export default class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            user: {
                email: '',
                password: ''
            }
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    // submitLogin(e) {
    //     e.preventDefault();
    //     console.log(this.state);

    //     this.props.userLogin(this.state.user).then(() => {
    //         this.props.history.push('/home');
    //     });
    // }

    updateFormField(e) {
        let user = { ...this.state.user, [e.target.name]: e.target.value };
        this.setState({
            user
        });
    }

    render() {
        return <div>
            {/* Navbar begins */}

            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Debate App</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem onClick={this.toggle}>Login/Sign up</NavItem>
                </Nav>
            </Navbar>

            {/* Navbar ends */}

            {/* Modal Begins */}
            <div className="myModal">

                <Modal isOpen={this.state.modal} toggle={this.toggle} className="myModal">
                    <ModalHeader toggle={this.toggle}>Login/Sign up</ModalHeader>
                    <ModalBody>
                        <Form>
                            <Input type="email" placeholder="Email" />
                            <br />
                            <Input type="password" placeholder="Password" />
                        </Form>
                        {/* <Link to="" className="innerLogin"> Forgot Password?</Link> */}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>
                            <Link to="/home" className="innerLogin"> Login</Link>
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>

            {/* Modal Ends */}

        </div>;
    }
}
