import React, { Component } from "react";
import { connect } from "react-redux";
import ArgumentItem from "./ArgumentItem";
import { Form, Input, Button } from "reactstrap";
import { getArguments, addArgument } from "../../redux/actions/argumentActions";
import { bindActionCreators } from "redux";
import Modal from "react-awesome-modal";

class ConArgumentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic_id: this.props.id,
      user_id: this.props.current_user.id,
      content: "",
      link: "",
      stance: false,
      visible: false
    };
  }

  modal() {
    this.setState({
      visible: !this.state.visible
    });
  }

  addNewArgument = e => {
    e.preventDefault();
    this.props.addArgument(this.state, this.props.history);
    this.setState({ visible: !this.state.visible });
  };

  componentDidMount() {
    if (!this.props.arguments) {
      this.props.getArguments(this.props.id);
    }
    console.log(this.props.current_user.id);
  }

  renderArguments() {
    return this.props.arguments.map(argItem => {
      if (!argItem.stance) {
        return <ArgumentItem key={argItem.id} argument={argItem}  />;
      }
    });
  }

  render() {

    let isLoggedIn;
    if (localStorage.getItem("X-User-Token")) {
      isLoggedIn = true;
    } else {
      isLoggedIn = false;
    }

    return <div>
        {isLoggedIn ? <button onClick={() => this.modal()}>
            Add Arg
          </button> : <div>hi</div>}

        {/* ADD ARGUMENT */}
        <Modal className="editModal" visible={this.state.visible} effect="fadeInRight" width="400" height="270" onClickAway={() => this.modal()}>
          <h1>Con</h1>
          <Form onSubmit={this.addNewArgument}>
            <Input onChange={e => this.setState({
                  content: e.target.value
                })} placeholder="Add your argument content here" bsSize="lg" />
            <Input onChange={e => this.setState({
                  link: e.target.value
                })} placeholder="Supporting Links" bsSize="lg" />
            <Button className="" type="submit" color="primary">
              Add New
            </Button>
          </Form>
        </Modal>
        {/* END ADD ARGUMENT */}
        <ul>{this.renderArguments()}</ul>
      </div>;
  }
}

const mapStateToProps = state => ({
  arguments: state.arguments,
  current_user: state.current_user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getArguments,
      addArgument
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConArgumentList);
