// The search component at Dashboard page
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import BottleField from './BottleField';
import { Field, reduxForm } from 'redux-form';
import { searchBottle } from '../../actions';

class BottleSearch extends Component {

  render() {
    // Used a debounce function to throttling the user input
    const keywordOnchange = _.debounce((value) => { this.props.searchBottle(value.target.value) }, 500);

    return (
      <div>
        <Field
          className="input-field col 12"
          label="Search by name, producer, year"
          type="text"
          name="keyword"
          component={BottleField}
          onChange={keywordOnchange}
        />
      </div>
    );
  }
}

export default connect(null, { searchBottle })(reduxForm({form: 'searchForm'})(BottleSearch));