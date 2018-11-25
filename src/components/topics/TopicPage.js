import React, { Component } from 'react'
import { getTopic, removeTopic } from "../../redux/actions/topicActions";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class TopicPage extends Component {
    componentDidMount() {
        console.log("this is the topic", this.props.topic)
        if (!this.props.topics) {
            const { id } = this.props.match.params.id;
            this.props.getTopic(id)
        }
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.removeTopic(id, () => {
            this.props.history.push('/')
        });
    }

    render() {
        const { topic } = this.props;
        if (!topic) {
            return <div>
                <Link to="/">Back to Index</Link> <br/>
                Loading...
              </div>;
        }
        return (
            <div>
                <Link to="/">Back to Index</Link>

                <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>Delete Topic</button>

                <h3>Title: {topic.title}</h3>
                <h3>Desc: {topic.description}</h3>
            </div>
        )
    }
}
const mapStateToProps = ({ topics }, ownProps) => {
    console.log("my topic", topics[ownProps.match.params.id]);
  return {
      topic: topics[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { getTopic, removeTopic})(TopicPage);