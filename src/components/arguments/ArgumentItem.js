import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeArgument } from "../../redux/actions/argumentActions";
import { addVote } from "../../redux/actions/voteActions";
import { fetchVotes } from "../../redux/actions/voteActions";

class ArgumentItems extends Component {
  state = {
    argument_id: this.props.argument.id
  };

  componentDidMount() {
    this.props.fetchVotes(this.props.argument.topic_id);
  }

  addVote() {
    this.props.addVote(this.state);
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

    console.log(this.props);
    return (
      <li>
        <p>{this.props.argument.content}</p>
        <a href={this.props.argument.link}>{this.props.argument.link}</a>

        {isLoggedIn ? <button onClick={() => this.addVote()}>Thumbs Up</button> : <div>hi</div>}
        
        

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

        <p>VOTES : {this.props.argument.votes.length}</p>
      </li>
    );
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
