import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getTopics } from "../../redux/actions/topicActions"
import { connect } from 'react-redux';
import TopicItems from "./TopicItems"
import { Row } from "reactstrap";

class TopicList extends Component {

    componentDidMount() {
        console.log("mounted here", this.props)
        this.props.getTopics();
    }

    render() {
        console.log('this.props in ml', this.props.topics)
        if (this.props.topics) {
            return <div className="TopicsContainer">
                <Row>
                  {this.props.topics.map(topic => (
                    <TopicItems key={topic.id} topic={topic} />
                  ))}
                </Row>
              </div>;
        } else {
            return <div>Loading...</div>
        }
    }
}

const mapStateToProps = state => {
    console.log('state in mstp', state)
    return {
        topics: state.topics.data
    };
};

export default connect(mapStateToProps, { getTopics })(TopicList);
