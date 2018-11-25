import _ from "lodash";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { getTopics } from "../../redux/actions/topicActions";
import { connect } from "react-redux";
import TopicItems from "./TopicItems";

class TopicList extends Component {
  componentDidMount() {
    this.props.getTopics();
  }

  renderPosts() {
    return _.map(this.props.topics, topic => {
      return (
        <li className="list-group-item" key={topic.id}>
          <Link to={`/topics/${topic.id}`}>
            <TopicItems key={topic.id} topic={topic} />
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
        <ul>
        {this.renderPosts()}
            
      </ul>
    );
  }
}

const mapStateToProps = state => {
  console.log("state in mstp", state);
  return {
    topics: state.topics
    // arguments: state.arguments
  };
};

export default connect(
  mapStateToProps,
  { getTopics }
)(TopicList);
