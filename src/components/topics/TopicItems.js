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
          <h1>{this.props.topic.title}</h1>
            <p>{this.props.topic.description}</p>
            {/* <ArgumentList /> */}
      </div>
    );
  }
}

export default TopicItems;
