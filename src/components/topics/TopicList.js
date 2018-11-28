// import _ from "lodash";
import React, { Component } from "react";
import { getTopics } from "../../redux/actions/topicActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../App.css";
import { Col, Card, CardBody, Row } from "reactstrap";

class TopicList extends Component {
  state = {
    searchInputs: this.props.term
  };

  componentDidMount() {
    this.props.getTopics();
  }

  isSubsequence(queryStr, targetStr) {
    let targetPtr = 0;
    queryStr = queryStr.toLowerCase();
    targetStr = targetStr.toLowerCase();

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
        return (
          <Col md="4">
            <Link to={`/topics/${topic.id}`} key={topic.id}>
              <Card
                className="card topic-card"
                style={{ backgroundImage: `url(${topic.image})` }}
              >
                <CardBody>
                  <div className="topic-list-item">
                    <div className="topic-list-item-content">
                      <h1> {topic.title}</h1>
                      <br/>
                      <h3>
                        {topic.description.length > 5
                          ? topic.description.substr(0, 80) + "..."
                          : topic.description}
                      </h3>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Link>
          </Col>
        );
      }
    });
  }

  render() {
    if (!this.props.topics) {
      return <div>Loading...</div>;
    } else {
      return <Row>{this.renderTopics()}</Row>;
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
