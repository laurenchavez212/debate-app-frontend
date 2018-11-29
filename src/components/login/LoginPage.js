import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { userLogin } from "../../redux/actions/userActions";
import { NavItem } from "reactstrap";
import Modal from "react-awesome-modal";
import "../../App.css";
import { FaUser } from "react-icons/fa";


class Login extends Component {
  state = {
    user: {
      email: "",
      password: ""
    }
  };
  modal() {
    this.setState({
      visible: !this.state.visible
    });
  }

  submitLogin(e) {
    e.preventDefault();
    this.modal();
      this.props.userLogin(this.state.user)
  }

  updateFormField(e) {
    let user = { ...this.state.user, [e.target.name]: e.target.value };
    this.setState({
      user
    });
  }
  render() {
    this.updateFormField = this.updateFormField.bind(this);
    return <div>
        <NavItem className="login" onClick={() => this.modal()}>
          <FaUser />
          Login
        </NavItem>
        <Modal className="editModal" visible={this.state.visible} effect="fadeInRight" width="400" height="270" onClickAway={() => this.modal()}>
          <h1>Login</h1>
          <form onSubmit={this.submitLogin.bind(this)}>
            <input type="email" name={"email"} placeholder={"Email"} onChange={this.updateFormField} />
            <input type="password" name={"password"} placeholder={"Password"} onChange={this.updateFormField} />
            <input type="submit" />
          </form>
        </Modal>
      </div>;
  }
}
export default withRouter(
  connect(
    null,
    { userLogin }
  )(Login)
);