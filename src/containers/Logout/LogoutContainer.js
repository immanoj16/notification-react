import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logout from '../../components/Logout/Logout'
import { logoutAndUnAuth } from '../../actions/userActions';

class LogoutContainer extends Component {

  componentDidMount() {
    this.props.dispatch(logoutAndUnAuth());
  }

  render() {
    return (
      <Logout />
    )
  }
}

export default connect()(LogoutContainer);
