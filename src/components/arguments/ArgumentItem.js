import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeArgument } from "../../redux/actions/argumentActions";
import { addVote } from "../../redux/actions/voteActions";
import { fetchVotes } from "../../redux/actions/voteActions";
import "../../App.css"
import { FaThumbsUp, FaTrash } from "react-icons/fa";
import { Card, CardBody, CardText, Col } from "reactstrap"


class ArgumentItems extends Component {
  state = {
    voteCounts: this.props.argument.votes.length,
    argument_id: this.props.argument.id
  };

  componentDidMount() {
    this.props.fetchVotes(this.props.argument.topic_id);
  }

  addVote() {
    console.log(this.state.voteCounts);
    // this.props.addVote(this.state);
    this.props.addVote({ argument_id: this.state.argument_id });
    this.setState({ voteCounts: this.state.voteCounts+1});
    console.log(this.state.voteCounts);
  }

  render() {
    let isLoggedIn;
    if (localStorage.getItem("X-User-Token")) {
      isLoggedIn = true;
    } else {
      isLoggedIn = false;
    }

    let allowDel;
    if (this.props.argument.user_id === this.props.current_user.user.id) {
      allowDel = true;
    } else {
      allowDel = false;
    }
    const { votes } = this.props
    return <li className="argument-cards">
        <Col sm="7">
          <Card className="argument-card-content">
            <CardText>
              <p>
                <i>{this.props.argument.user_name}</i>
              </p>
              {this.props.argument.content}
            </CardText>
            <a href={this.props.argument.link}>
              {this.props.argument.link}
            </a>
            <CardBody className="argument-card-buttons">
              {isLoggedIn ? <button className="arg-button" onClick={() => this.addVote()}>
                  <FaThumbsUp />
                  {this.props.argument.votes ? this.state.voteCounts : 0}
                </button> : <div />}

              {allowDel ? <button className="arg-button del-button" onClick={() => this.props.removeArgument(this.props.argument.id)}>
                  <FaTrash />
                </button> : <div />}
            </CardBody>
          </Card>
        </Col>
      </li>;
  }
}


  


const mapStateToProps = state => ({
  votes: state.votes,
  current_user: state.current_user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeArgument,
      addVote,
      fetchVotes
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArgumentItems);
