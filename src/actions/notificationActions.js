import { sendNotification, fetchNotification, removeNotification } from '../helpers/api';
import { FETCH_NOTIFICATIONS } from '../constants';

const fetchNotifications = (notification) => {
  return {
    type: FETCH_NOTIFICATIONS,
    notification
  }
};

export const removeAndHandleNotification = (uid, notificationId) => {
  console.log(uid, notificationId)
  return dispatch => {
    removeNotification(uid, notificationId);
    dispatch(fetchAndHandleNotification(uid));
  }
}

export const sendAndReceiveNotificationHelper = (receiverId, notification) => {
  return (dispatch, getState) => {
    const senderId = getState().users.authedId;
    return sendNotification(notification, senderId, receiverId)
      .then((notificationWithId) => {
        dispatch(fetchAndHandleNotification(senderId))
      })
      .catch(err => console.warn('Error in notification', err))
  }
}

export const fetchAndHandleNotification = (uid) => {
  return dispatch => {
    fetchNotification(uid)
      .then(notification => dispatch(fetchNotifications(notification)))
  }
} 
