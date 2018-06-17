import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect, } from 'react-redux';
import { bindActionCreators } from 'redux';

import NotificationList from '../components/NotificationList';
import NotificationHeader from '../components/NotificationHeader';
import { closeNotificationModal } from '../actions/notificationModalActions';
import { removeAndHandleNotification } from '../actions/notificationActions';

class Notifications extends Component {

  constructor(props) {
    super(props);

    this.modal = React.createRef();
  }

  handleRemoveNotification = (notificationId) => {
    this.props.removeAndHandleNotification(this.props.authedId, notificationId)
  };

  showNotification = (notificationId) => {
    this.props.closeNotificationModal();
    this.props.history.push(`/notification/${notificationId}`);
  }

  render() {

    const { isOpen } = this.props;

    let style;
    style = isOpen ? {display: 'block'} : null;

    window.onclick = (e) => {
      if (e.target === this.modal.current) {
        this.props.closeNotificationModal();
      }
    }

    return (
      <Modal style={style} innerRef={this.modal}>
        <Div>
          <NotificationHeader notifications={this.props.notifications} />
          <NotificationList showNotification={this.showNotification} users={this.props.users} handleRemoveNotification={this.handleRemoveNotification} notifications={this.props.notifications} />
        </Div>
      </Modal>
    )
  }
}

const Modal = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  padding-bottom: 150px;
  left: 0;
  top: 0;
  padding-top: 80px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

const Div = styled.div`
  width: 350px;
  background: #fefefe;
  margin: auto;
  border: 1px solid #888;
`;

const mapStateToProps = (state) => ({
  notifications: state.notifications.received,
  isOpen: state.notificationModal.isOpen,
  authedId: state.users.authedId,
  users: state.users.users
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ closeNotificationModal, removeAndHandleNotification }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Notifications));