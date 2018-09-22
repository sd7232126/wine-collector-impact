// Dashboard Component, with Search Bar and List of Bottles
import React from 'react';
import { Link } from 'react-router-dom';
import BottleList from './bottles/BottleList';
import BottleSearch from './bottles/BottleSearch';

const Dashboard = () => {
  return(
    <div>
      <BottleSearch />
      <BottleList />
      <div className="fixed-action-btn">
        <Link to="/bottles/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;