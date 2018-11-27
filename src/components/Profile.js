import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import { getTopics } from "../redux/actions/topicActions";
import { getArguments } from "../redux/actions/argumentActions";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom"
import "../App.css";

class Profile extends Component {

  componentDidMount() {
    this.props.getArguments();
    this.props.getTopics();
  }


  renderTopics() {
    return this.props.topics.map(topic => {
      if (topic.user_id === this.props.current_user.user.id) {
        return <Link to={`/topics/${topic.id}`} key={topic.id}>
          <h3>{topic.title}</h3>
        </Link>
      }
  })
  }
  
  renderArguments() {
    return this.props.arguments.map(argument => {
      if (argument.user_id === this.props.current_user.user.id) {
        return <Link to={`/topics/${argument.topic_id}`} key={argument.id}>
          <h3>{argument.content}</h3>
          </Link>;
      }
    })
  }


  render() {
    console.log(this.props.arguments)
    console.log(this.props.current_user.user.id);
    let image = this.props.current_user.user.image;
    let user_name = this.props.current_user.user.user_name;
    return <div className="profileContainer">
        <button className="btn">Edit my Profile Image</button>
        <Row>
          <img src={image} alt="profile image" />
          <h1>{user_name}</h1>
        </Row>
        <Row>
          <Col>
            <h4>Your Topics</h4>
            <ul>{this.renderTopics()}</ul>
          </Col>
          <Col>
            <h3>Your Arguments</h3>
            <ul>{this.renderArguments()}</ul>
          </Col>
        </Row>
      </div>;
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
      getArguments,
      getTopics
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
