import React, { Component } from 'react';
import { connect }  from 'react-redux';

import SingleNotification from '../../components/SingleNotification/SingleNotification';

class SingleNotificationContainer extends Component {
  render() {

    let notification, name;
    if (this.props.notifications && Object.keys(this.props.notifications).length > 0) {
      notification = this.props.notifications[this.props.match.params.notificationId];
      console.log(notification)
      const user = this.props.users.find(({ uid }) => uid === notification.uid);
      name = user.name;
    }

    if (this.props.notifications && Object.keys(this.props.notifications).length > 0) {
      return (
        <SingleNotification name={name} notification={notification} />
      )    
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => ({
  notifications: state.notifications.received,
  users: state.users.users
})

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ closeNotificationModal, removeAndHandleNotification }, dispatch)
// }

export default connect(mapStateToProps)(SingleNotificationContainer);
