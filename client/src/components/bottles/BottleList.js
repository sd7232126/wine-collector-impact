// List of bottle collections component
import _ from 'lodash'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBottles } from '../../actions';
import { Link } from 'react-router-dom';

class BottleList extends Component {
  // On component load, fetch the list of bottles
  componentDidMount() {
    this.props.fetchBottles();
  }

  renderBottles() {
    // Get the active (filtered) bottles
    const bottles = this.props.bottles.active;

    if (!bottles) {
      return <div>Loading...</div>
    }

    // For each of the bottle collection, display a card
    return _.map(bottles, bottle => {
      return (
        <Link to={`./bottles/${bottle._id}`} key={bottle._id}>
          <div className="card" key={bottle._id}>
            <div className="card-content">
              <span className="card-title">{bottle.name}</span>
              <span>by <b>{bottle.producer}</b> in <b>{bottle.year}</b></span>
              <p className="right">Rate: {bottle.rating}</p>
            </div>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderBottles()}
      </div>
    );
  }
}

function mapStateToProps({ bottles }) {
  return { bottles };
}

export default connect(mapStateToProps, { fetchBottles })(BottleList);