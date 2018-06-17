import { SEND_AND_RECEIVE_NOTIFICATION, REMOVE_NOTIFICATION, FETCH_NOTIFICATIONS } from '../constants';

const initialState = {
  isFetching: false,
  error: '',
  sent: {},
  received: {}
}

const notification = (state=initialState, action) => {
  switch(action.type) {
    case SEND_AND_RECEIVE_NOTIFICATION:

      const newNotification = {
        ...action.notification,
        receiverId: action.receiverId
      }

      return {
        ...state,
        sent: {
          ...state.sent,
          [action.notification.notificationId]: newNotification
        }
      }
    case FETCH_NOTIFICATIONS:
      return {
        ...state,
        sent: action.notification.sent,
        received: action.notification.received
      }
    case REMOVE_NOTIFICATION:
      const newState = state.filter(({ id }) => id !== action.id);
      return newState;
    default:
      return state;
  }
}

export default notification;
