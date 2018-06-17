import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userActionCreators from './actions/userActions';
import { formatUserInfo } from './helpers/utils';
import { firebaseAuth } from './config/constants';
import Navbar from './containers/Navbar';
import Notifications from './containers/Notifications';
import HomeContainer from './containers/Home/HomeContainer';
import AuthenticateContainer from './containers/Authenticate/AuthenticateContainer';
import DashboardContainer from './containers/Dashboard/DashboardContainer';
import LogoutContainer from './containers/Logout/LogoutContainer';

import './App.css';
import PrivateRoute from './components/common/PrivateRoute';
import PublicRoute from './components/common/PublicRoute';

class App extends Component {

  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        const userData = user.providerData[0];
        const userInfo = formatUserInfo(userData.displayName, userData.photoURL, user.uid);
        this.props.authUser(user.uid);
        this.props.fetchingUserSuccess(user.uid, userInfo, Date.now());
      } else {
        this.props.removeFetchingUser();
      }
    })
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return this.props.isFetching
      ? null
      : <Router>
          <Container>
            <Navbar isAuthed={this.props.isAuthed} />
            <Notifications />
            <InnerContainer>
              <Switch>
                <Route exact path='/' component={HomeContainer} />
                <PublicRoute path='/auth' component={AuthenticateContainer} />
                <Route path='/logout' component={LogoutContainer} />
                <PrivateRoute path='/dashboard' component={DashboardContainer} />
                <Route render={() => <h3>No Match</h3>} />
              </Switch>
            </InnerContainer>
          </Container>
        </Router>
  }
}

const Container = styled.div`
  width: 100%;
`;

const InnerContainer = styled.div`
  max-width: 900px;
  margin: 60px auto;
`;

const mapStateToProps = (state) => ({
  isAuthed: state.users.isAuthed,
  isFetching: state.users.isFetching
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(userActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
