import React, { Component } from "react";
import Watching from "./Watching";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

class Profile extends Component {
  render() {
    return (
      <div className="profileContainer">
                <button className="btn">Edit my Profile Image</button>
            <Row>
          <img
            src="http://datingupsidedown.com/wp-content/uploads/2017/02/Dating-Upside-Down-Post-Who-Are-You-Fake-Dating-Profile-Pic-.jpg"
            alt="profile image"
          />
          <h1>Bobby Bones</h1>
        </Row>
        <Row>
          <Col>
            <h4>List of Topics and Arguments I've posted here </h4>
          </Col>
          <Col>
            <h3>Component of Topics I'm Watching Here</h3>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profile;
