import React, { Component } from "react";
import { Col } from "reactstrap";

class TopicItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Col>
          <h3>{this.props.topic.title}</h3>
          <p>{this.props.topic.description}</p>
        </Col>
      </div>
    );
  }
}

export default TopicItems;
