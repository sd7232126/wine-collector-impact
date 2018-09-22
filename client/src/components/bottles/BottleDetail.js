// Bottle Detail page
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBottle, deleteBottle } from '../../actions';
import { reduxForm, Field } from 'redux-form';
import { updateBottle } from '../../actions';
import BottleField from './BottleField';

class BottleDetail extends Component {
  // On page load, call specific bottle by id
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchBottle(id);
  }

  // On delete bottle button clicked, call deleteBottle to delete the collection
  onDeleteBottleClick() {
    const { bottle, history } = this.props
    this.props.deleteBottle(bottle._id, history);
  }

  // Render function
  render() {
    const { bottle } = this.props;

    // Display loading when bottle is not loaded
    if (!bottle) {
      return <div>Loading...</div>;
    }

    return (
      <form onSubmit={this.props.handleSubmit(values => this.props.updateBottle(values, this.props.history))}>
        <div className="card">
          <div className="card-content">
            <h4>{bottle.name}</h4>
            <h5>Producer: {bottle.producer}</h5>
            <h5>Year: {bottle.year}</h5>
            <p>{bottle.description}</p>
          </div>
          <div className="card-content grey lighten-4">
              <Field label="Rating" type="text" name="rating" component={BottleField} />
              <Field label="Comment" type="text" name="comment" component={BottleField} />
          </div>
        </div>
        <Link to="/bottles" className="red btn-flat white-text">Back</Link>
        <button type="submit" className="teal btn-flat right white-text">Save</button>
        <button onClick={this.onDeleteBottleClick.bind(this)} className="red btn-flat right white-text" style={{ marginRight: '10px' }}>Delete</button>
      </form>
    );
  }
}

function mapStateToProps({ bottles }, ownProps) {
  return {
    bottle: bottles[ownProps.match.params.id],
    initialValues: bottles[ownProps.match.params.id]
  };
}

// connect state and actions, and pass history prop for actions to redirect
export default connect(mapStateToProps, { fetchBottle, updateBottle, deleteBottle })(
  reduxForm({
    form: 'bottleUpdateForm'
  })(withRouter(BottleDetail))
);