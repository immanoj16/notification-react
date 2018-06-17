import { OPEN_NOTIFICATION_MODAL, CLOSE_NOTIFICATION_MODAL } from '../constants';

const initialState = {
  isOpen: false
}

const notificationModal = (state=initialState, action) => {
  switch(action.type) {
    case OPEN_NOTIFICATION_MODAL:
      return {
        isOpen: true
      };
    case CLOSE_NOTIFICATION_MODAL:
      return {
        isOpen: false
      };
    default:
      return state;
  }
};

export default notificationModal;
