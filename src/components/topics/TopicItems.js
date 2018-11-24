import React, { Component } from "react";
import { Col } from "reactstrap";
import ArgumentList from "../arguments/ArgumentList";

class TopicItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Col>
          <a href={`v1/topic/{this.props.topic.id}`}>
          <h3>{this.props.topic.title}</h3>
            <p>{this.props.topic.description}</p>
            <ArgumentList />
          </a>
        </Col>
      </div>
    );
  }
}

export default TopicItems;
