import React, { Component } from "react";
import ProArgumentList from "../arguments/ProArgumentList";
import ConArgumentList from "../arguments/ConArgumentList";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getArguments } from "../../redux/actions/argumentActions";
import { removeTopic } from "../../redux/actions/topicActions";
import {Col, Row} from 'reactstrap'

class TopicPage extends Component {
  componentDidMount() {
    if (!this.props.topics) {
      this.props.getArguments(this.props.match.params.id);
    }
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.removeTopic(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { topic } = this.props;
    if (!topic) {
      return (
        <div>
          <Link to="/">Back to Index</Link> <br />
          Loading...
        </div>
      );
    }
    return <div>
        <Link to="/">Back to Index</Link>

        <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
          Delete Topic
        </button>

        <h3>Title: {topic.title}</h3>
        <h3>Desc: {topic.description}</h3>
        <Row>
            <Col>
                <h2>Pro</h2>
          <ProArgumentList />
        </Col>
            <Col>
                <h2>Con</h2>
          <ConArgumentList />
        </Col>
        </Row>
        
      </div>;
  }
}
const mapStateToProps = state => ({
  arguments: state.arguments.arguments,
  topic: state.arguments.topic
});

const mapDispatchToProps = {
  getArguments,
  removeTopic
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicPage);
