import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Modal from '../../components/Modal/Modal';
import * as modalActionCreators from '../../actions/modalActions';
import * as notificationActionCreators from '../../actions/notificationActions';
import { formatNotification } from '../../helpers/utils';

class ModalContainer extends React.Component {

  state = {
    text: '',
    isOpen: false
  }

  openModal = () => {
    this.setState({isOpen: true})
  }

  closeModal = (e) => {
    e.stopPropagation();
    this.setState({text: '', isOpen: false});
  }

  updateText = (newText) => {
    this.setState({ text: newText })
  }

  submitDuck = (e) => {
    this.props.sendAndReceiveNotificationHelper(this.props.receiverId, formatNotification(this.state.text))
      .then(() => {
        this.closeModal(e);
      })
  }

  render () {
    const textLength = this.state.text.length;

    return (
      <Modal
        title={this.props.title}
        user={this.props.user}
        text={this.state.text}
        isOpen={this.state.isOpen}
        openModal={this.openModal}
        closeModal={this.closeModal}
        updateText={this.updateText}
        submitDuck={this.submitDuck}
        isSubmitDisabled={textLength <= 0 || textLength > 140}
      />
    )
  }
}

const mapStateToProps = ({modal, users}) => {
  // const textLength = modal.text.length
  return {
    user: users[users.authedId] ? users[users.authedId].info : {},
    text: modal.text,
    isOpen: modal.isOpen,
    // isSubmitDisabled: textLength <= 0 || textLength > 140,
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...modalActionCreators, ...notificationActionCreators}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer)