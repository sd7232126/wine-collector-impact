// New Bottle Form Component
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import BottleField from './BottleField';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';

class BottleForm extends Component {
  // Render the input fields function
  renderFields() {
    return (
      <div>
        <Field label="Name" type="text" name="name" component={BottleField} />
        <Field label="Description" type="text" name="description" component={BottleField} />
        <Field label="Producer" type="text" name="producer" component={BottleField} />
        <Field label="Year" type="text" name="year" component={BottleField} />
        <Field label="Rating" type="text" name="rating" component={BottleField} />
        <Field label="Comment" type="text" name="comment" component={BottleField} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => this.props.createBottle(values, this.props.history))}>
          {this.renderFields()}
          <Link to="/bottles" className="red btn-flat white-text">Cancel</Link>
          <button type="submit" className="teal btn-flat right white-text">Create</button>
        </form>
      </div>
    );
  }
}

// Validation function to check inputs
function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Please provide a name for your collection.';
  }
  if (!values.year) {
    errors.year = 'Please provide the year of your collection.';
  }
  if (!values.producer) {
    errors.producer = 'Please provide the producer of your collection.';
  }

  return errors;
}

export default connect(null, actions)(
  reduxForm({
    validate,
    form: 'bottleForm'
  })(withRouter(BottleForm))
);
