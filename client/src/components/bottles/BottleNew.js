// New Bottle Page, which only contains the form component at the moment
import React, { Component } from 'react';
import BottleForm from './BottleForm';

class BottleNew extends Component {
  render() {
    return (
      <div>
        <BottleForm />
      </div>
    );
  }
}

export default BottleNew;