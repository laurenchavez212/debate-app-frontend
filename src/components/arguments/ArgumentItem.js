import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeArgument} from "../../redux/actions/argumentActions"

class ArgumentItems extends Component {

  onDeleteClick() {
    const { id } = this.props.argument.id;
    this.props.removeArgument(id);
  }

    render() {
        return <li>
            <p>{this.props.argument.content}</p>
            <a href={this.props.argument.link}>
              {this.props.argument.link}
            </a>
            <button>Thumbs Up</button>
            <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
              Delete
            </button>
          </li>;
           
          
    }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeArgument
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(ArgumentItems);
