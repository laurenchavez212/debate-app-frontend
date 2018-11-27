import React, { Component } from "react";
import ProArgumentList from "../arguments/ProArgumentList";
import ConArgumentList from "../arguments/ConArgumentList";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getArguments } from "../../redux/actions/argumentActions";
import { removeTopic, getTopic } from "../../redux/actions/topicActions";
import { Col, Row } from "reactstrap";
import "../../App.css";

class TopicPage extends Component {
  componentDidMount() {
    this.props.getArguments(this.props.match.params.id);
    this.props.getTopic(this.props.match.params.id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.removeTopic(id, () => {
      this.props.history.push("/");
    });
  }


    render() {
        const { topics } = this.props;
        const topic = topics[0];
      

        let allowDel = topic && topic.user_id === this.props.current_user.user.id;


    if (!topic) {
      return (
        <div>
          <Link to="/">Back to Index</Link> <br />
          Loading...
        </div>
      );
    }
    return (
      <div>
        {allowDel ? (
          <button
            className="btn btn-danger"
            onClick={() => this.props.removeArgument(this.props.argument.id)}
          >
            Delete
          </button>
        ) : (
          <div></div>
        )}

        <h3>Title: {topic.title}</h3>
        <h3>Desc: {topic.description}</h3>
        <Row>
          <Col>
            <h2>Pro</h2>
            <ProArgumentList id={this.props.match.params.id} />
          </Col>
          <Col>
            <h2>Con</h2>
            <ConArgumentList id={this.props.match.params.id} />
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

const mapDispatchToProps = {
  getArguments,
  getTopic,
  removeTopic
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicPage);
