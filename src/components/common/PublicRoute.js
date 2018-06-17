import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({component: Component, isAuthed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => isAuthed === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />}
    />
  )
}

const mapStateToProps = state => ({
  isAuthed: state.users.isAuthed
})

export default connect(mapStateToProps)(PublicRoute);