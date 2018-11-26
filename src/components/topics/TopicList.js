// import _ from "lodash";
import React, { Component } from "react";
import { getTopics } from "../../redux/actions/topicActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class TopicList extends Component {
  state = {
    searchInputs: this.props.term
  };

  componentDidMount() {
    this.props.getTopics();
    console.log(this.state.searchInputs);
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
        return <Link to={`/topics/${topic.id}`} key={topic.id}>
            <li className="list-group-item">
              <h1>{topic.title}</h1>
              {/* <p>
                {topic.description.length > 5
                  ? topic.description.substr(0, 9) + "..."
                  : topic.description}
              </p> */}
            <p>{topic.description}</p>
            </li>
          </Link>;
      }
    });
  }

  render() {
    console.log(this.props.topics);

    if (!this.props.topics) {
      return (<div>Loading...</div>)
    } else {
      return (
        <React.Fragment>
          <ul>{this.renderTopics()}</ul>
        </React.Fragment>
      );
    }
  }

  
}

const mapStateToProps = state => {
  console.log("state in mstp", state);
  return {
    topics: state.topics
  };
};

export default connect(
  mapStateToProps,
  { getTopics }
)(TopicList);
