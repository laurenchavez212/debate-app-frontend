import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addTopic } from "../../redux/actions/topicActions";

class NewTopicForm extends Component {
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
      this.props.addTopic(values, () => {
        this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field placeholder="Title" name="title" component={this.renderField} />
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
