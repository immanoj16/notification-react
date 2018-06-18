import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userActionCreators from './actions/userActions';
import { fetchAndHandleNotification } from './actions/notificationActions';
import { formatUserInfo } from './helpers/utils';
import { firebaseAuth } from './config/constants';
import NavbarContainer from './containers/Navbar/NavbarContainer';
import Notifications from './containers/Notifciation/NotificationContainer';
import HomeContainer from './containers/Home/HomeContainer';
import AuthenticateContainer from './containers/Authenticate/AuthenticateContainer';
import DashboardContainer from './containers/Dashboard/DashboardContainer';
import LogoutContainer from './containers/Logout/LogoutContainer';
import SingleNotificationContainer from './containers/SingleNotification/SingleNotificationContainer';

import './App.css';
import PrivateRoute from './components/common/PrivateRoute';
import PublicRoute from './components/common/PublicRoute';
import { firebaseListener } from './helpers/firebase-listener';

class App extends Component {

  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        const userData = user.providerData[0];
        const userInfo = formatUserInfo(userData.displayName, userData.photoURL, user.uid);
        this.props.authUser(user.uid);
        this.props.fetchingUserSuccess(user.uid, userInfo, Date.now());
        this.props.fetchAndHandleNotification(user.uid);
        this.props.fetchingUsers();
        firebaseListener();
      } else {
        this.props.removeFetchingUser();
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return this.props.isFetching
      ? null
      : <Router>
          <Container>
            <NavbarContainer isAuthed={this.props.isAuthed} />
            <Notifications />
            <InnerContainer>
              <Switch>
                <Route exact path='/' component={HomeContainer} />
                <PublicRoute path='/auth' component={AuthenticateContainer} />
                <Route path='/logout' component={LogoutContainer} />
                <PrivateRoute path='/dashboard' component={DashboardContainer} />
                <Route path='/notification/:notificationId' component={SingleNotificationContainer} />
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

  @media(max-width: 769px) {
    margin-top: 100px;
  }
`;

const mapStateToProps = (state) => ({
  isAuthed: state.users.isAuthed,
  isFetching: state.users.isFetching,
  notifications: state.notifications.received
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...userActionCreators, fetchAndHandleNotification}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
