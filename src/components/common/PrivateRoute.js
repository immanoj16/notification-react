import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isAuthed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthed ? (
        <Component {...props} />
      ) : (
          <Redirect to="/auth" />
        )
    }
  />
)

const mapStateToProps = state => ({
  isAuthed: state.users.isAuthed
})

export default connect(mapStateToProps)(PrivateRoute);
