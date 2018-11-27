// import _ from "lodash";
import React, { Component } from "react";
import { getTopics } from "../../redux/actions/topicActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../App.css";
import { Col } from "reactstrap"

class TopicList extends Component {
  state = {
    searchInputs: this.props.term
  };

  componentDidMount() {
    this.props.getTopics();
  }

  isSubsequence(queryStr, targetStr) {
    let targetPtr = 0;
    for (let i = 0; i < queryStr.length; i++) {
      if (targetStr.substr(targetPtr).indexOf(queryStr[i]) >= 0) {
        targetPtr = targetStr.indexOf(queryStr[i]);
      } else {
        return false;
      }
    }
    return true;
  }


  renderTopics() {
    return this.props.topics.map(topic => {
      if (this.isSubsequence(this.props.term, topic.title)) {
        return <Col><Link to={`/topics/${topic.id}`} key={topic.id}>
            <li className="topic-list-item">
              <h1>{topic.title}</h1>
              <p>
                {topic.description.length > 5
                  ? topic.description.substr(0, 9) + "..."
                  : topic.description}
              </p>
            </li>
        </Link>
        </Col>
      }
    });
  }

  render() {

    if (!this.props.topics) {
      return (<div>Loading...</div>)
    } else {
      return (
        <React.Fragment>
          {this.renderTopics()}
        </React.Fragment>
      );
    }
  }

  
}

const mapStateToProps = state => {
  return {
    topics: state.topics
  };
};

export default connect(
  mapStateToProps,
  { getTopics }
)(TopicList);
