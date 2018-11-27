import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addTopic, getTopic } from "../../redux/actions/topicActions";
import Modal from "react-awesome-modal";
import { bindActionCreators } from "redux";
import { Form, Input, Button } from "reactstrap";

class NewTopicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      user_id: this.props.current_user.id,
      image: "",
      visible: false
    };
  }

  modal() {
    this.setState({
      visible: !this.state.visible
    });
  }

  addNewTopic = e => {
    e.preventDefault();
    this.props.addTopic(this.state, this.props.history);
    this.setState({ visible: !this.state.visible });
  };

  render() {
    let isLoggedIn;
    if (localStorage.getItem("X-User-Token")) {
      isLoggedIn = true;
    } else {
      isLoggedIn = false;
    }
    return <div>
        {isLoggedIn ? <button onClick={() => this.modal()}>
            Add a Topic
          </button> : <div>hi</div>}

        <Modal className="editModal" visible={this.state.visible} effect="fadeInRight" width="400" height="270" onClickAway={() => this.modal()}>
          <h3>New Topic</h3>
          <Form onSubmit={this.addNewTopic}>
            <Input onChange={e => this.setState({
                  title: e.target.value
                })} placeholder="Add your topic here" bsSize="lg" />
            <Input onChange={e => this.setState({
                  description: e.target.value
                })} placeholder="Give a description" bsSize="lg" />
            <Input onChange={e => this.setState({
                  image: e.target.value
                })} placeholder="Supporting Image" bsSize="lg" />
            <Button className="" type="submit" color="primary">
              Add New
            </Button>
          </Form>
        </Modal>
      </div>;
  }
}

const mapStateToProps = state => ({
  current_user: state.current_user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getTopic,
      addTopic
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTopicForm);
