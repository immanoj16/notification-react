import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Authenticate from '../../components/Authenticate/Authenticate';
import * as userActionCreators from '../../actions/userActions';

class AuthenticateContainer extends Component {

  handleAuth = () => {
    this.props.fetchAndHandleAuthedUser()
      .then(() => {
        this.props.history.push('/dashboard');
      })
  }

  render() {
    console.log(this.props.isFetching)
    return (
      <Authenticate 
        isFetching={this.props.isFetching}
        error={this.props.error}
        onAuth={this.handleAuth}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.users.isFetching,
  error: state.users.error
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(userActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer);
