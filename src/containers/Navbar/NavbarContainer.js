import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openNotificationModal, closeNotificationModal } from '../../actions/notificationModalActions';

class NavbarContainer extends React.Component {
  render () {
    return (
      <Navbar 
        isAuthed={this.props.isAuthed}
        isOpen={this.props.isOpen}
        openModal={this.props.openNotificationModal}
        closeModal={this.props.closeNotificationModal}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.modal.isOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ openNotificationModal, closeNotificationModal }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
