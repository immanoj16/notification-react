import { sendNotification } from '../helpers/api';
import { SEND_AND_RECEIVE_NOTIFICATION, REMOVE_NOTIFICATION } from '../constants';

export const sendAndReceiveNotification = (senderId, receiverId, notification) => {
  return {
    type: SEND_AND_RECEIVE_NOTIFICATION,
    senderId,
    receiverId,
    notification
  }
};

export const removeNotification = (id) => {
  return {
    type: REMOVE_NOTIFICATION,
    id
  }
};

export const sendAndReceiveNotificationHelper = (receiverId, notification) => {
  return (dispatch, getState) => {
    const senderId = getState().users.authedId;
    return sendNotification(notification, senderId, receiverId)
      .then((notificationWithId) => {
        dispatch(sendAndReceiveNotification(senderId, receiverId, notificationWithId));
      })
      .catch(err => console.warn('Error in notification', err))
  }
}
