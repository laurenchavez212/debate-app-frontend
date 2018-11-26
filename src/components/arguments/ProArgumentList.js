import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Modal, ModalHeader } from "reactstrap";
import ArgumentItem from "./ArgumentItem";
import { getArguments } from "../../redux/actions/argumentActions";
import { addArgument } from "../../redux/actions/argumentActions";

class ArgumentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // topic_id: this.props.match.params.id,
      user_id: "",
      content: "",
      link: "",
      stance: true,
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  addNewArgument = e => {
    alert("Your Argument Had Been Added!");
    e.preventDefault();
    this.props.addArgument(this.state, this.props.history);
  };

  componentDidMount() {
    if (!this.props.arguments) {
      this.props.getArguments(this.props.match.params.id);
    }
  }

  renderArguments() {
    return this.props.arguments.map(argItem => {
      if (argItem.stance) {
        console.log(argItem);
        return <ArgumentItem key={argItem.id} argument={argItem} />;
      }
    });
  }

  addNewArgument = e => {
    alert("Your Argument Had Been Added!");
    e.preventDefault();
    this.props.addArgument(this.state, this.props.history);
  };

  render() {
    return (
      <div>
        <button onClick={this.toggle.bind(this)}>Add Arg</button>
        {/* ADD ARGUMENT */}
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="myModal"
        >
          <ModalHeader>Pro</ModalHeader>
          <Form onSubmit={this.addNewArgument}>
            <Input
              onChange={e =>
                this.setState({
                  content: e.target.value
                })
              }
              placeholder="Add your argument content here"
              bsSize="lg"
            />
            <Input
              onChange={e =>
                this.setState({
                  link: e.target.value
                })
              }
              placeholder="Supporting Links"
              bsSize="lg"
            />
            <Button className="" type="submit" color="primary">
              Add New
            </Button>
          </Form>
        </Modal>
        {/* END ADD ARGUMENT */}
        <ul>{this.renderArguments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  arguments: state.arguments.arguments
});

const mapDispatchToProps = {
  getArguments,
  addArgument
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArgumentList);
