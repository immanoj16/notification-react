import { SEND_AND_RECEIVE_NOTIFICATION, REMOVE_NOTIFICATION } from '../constants';

const initialState = {
  isFetching: false,
  error: ''
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
        [action.notification.notificationId]: newNotification
      }
    case REMOVE_NOTIFICATION:
      const newState = state.filter(({ id }) => id !== action.id);
      return newState;
    default:
      return state;
  }
}

export default notification;
