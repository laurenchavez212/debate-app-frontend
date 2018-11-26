import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addTopic } from "../../redux/actions/topicActions";
import Modal from "react-awesome-modal";

class NewTopicForm extends Component {
  state = {
    visible: this.props.modalState
  };

  modal() {
    this.setState({
      visible: !this.state.visible
    });
  }

  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    // CHANGE 'DANGER' TO PERSONALIZED STYLE
    const className = `form-group ${touched && error ? "danger" : ""}`;

    return (
      <div className={className}>
        <input
          placeholder={field.placeholder}
          className="form-control"
          type="text"
          {...field.input}
        />
        {touched ? error : ""}
      </div>
    );
  }

  onSubmit(values) {
    // this.props.modalState = ;
    this.props.addTopic(values);
    this.setState({
      visible: !this.state.visible
    });
    this.setState({});
  }

  render() {
    const { handleSubmit } = this.props;
    return (<div>
      <button onClick={() => this.modal()}>Add a Topic</button>
      <Modal
        className="editModal"
        visible={this.state.visible}
        effect="fadeInRight"
        width="400"
        height="270"
        onClickAway={() => this.modal()}
      >
        <h3>New Topic</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            placeholder="Title"
            name="title"
            component={this.renderField}
          />
          <Field
            placeholder="Description"
            name="description"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/" className="btn btn-danger">
            Cancel
          </Link>
        </form>
      </Modal>
    </div>
    );
  }
}

function validate(values) {
  const errors = {};
  // Validate the inputs from 'values';
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.description) {
    errors.description = "Enter a description!";
  }

  // If errors si empty the form is fine to submit
  // If errors have *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "NewTopicForm"
})(
  connect(
    null,
    { addTopic }
  )(NewTopicForm)
);
