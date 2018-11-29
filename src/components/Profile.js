import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Jumbotron, Container, ListGroup, ListGroupItem } from "reactstrap";
import { getTopics } from "../redux/actions/topicActions";
import { getArgumentsForUser } from "../redux/actions/argumentActions";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import "../App.css";
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";

class Profile extends Component {
  componentDidMount() {
    this.props.getArgumentsForUser();
    this.props.getTopics();
  }

  renderTopics() {
    return this.props.topics.map(topic => {
      if (topic.user_id === this.props.current_user.user.id) {
        return <Link to={`/topics/${topic.id}`} key={topic.id}>
          <ListGroupItem className="list-group-item">
              <h3>{topic.title}</h3>
            </ListGroupItem>
          </Link>;
      }
    });
  }

  renderArguments() {
    return this.props.arguments.map(argument => {
      if (argument.user_id === this.props.current_user.user.id) {
        return <Link to={`/topics/${argument.topic_id}`} key={argument.id}>
            <ListGroupItem className="list-group-item">
              <h3>{argument.content}</h3>
            </ListGroupItem>
          </Link>;
      }
    });
  }

  render() {
    let image = this.props.current_user.user.image;
    let user_name = this.props.current_user.user.user_name;
    return (
      <div className="profile-container">
        <Jumbotron fluid>
          <Container fluid>
            <div>
              <img src={image} className="profile-image" alt="profile image" />
            </div>
            <h1 className="profile-user-name">
              <b>@{user_name}</b>
            </h1>
            <div className="social-icons">
              <a href="https://www.facebook.com/">
                <FaFacebookSquare />
              </a>
              <a href="https://twitter.com/">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram />
              </a>
            </div>
          </Container>
        </Jumbotron>
        <Row>
          <Col>
            <h2>Your Topics</h2>
            <ListGroup className="list-group">
              <ul>{this.renderTopics()}</ul>
            </ListGroup>
            {/* created on this date */}
          </Col>
          <Col>
            <h2>Your Arguments</h2>
            <ListGroup className="list-group">
              <ul>{this.renderArguments()}</ul>
            </ListGroup>
            {/* created on this date */}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  arguments: state.arguments,
  topics: state.topics,
  current_user: state.current_user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getArgumentsForUser,
      getTopics
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
