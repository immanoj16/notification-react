import React, { Component } from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';

class DashboardContainer extends Component {
  render() {
    return (
      <Dashboard
        {...this.props}
      />
    )
  }
}

export default DashboardContainer;
