import { OPEN_NOTIFICATION_MODAL, CLOSE_NOTIFICATION_MODAL } from '../constants';

export const openNotificationModal = () => {
  return {
    type: OPEN_NOTIFICATION_MODAL
  }
};

export const closeNotificationModal = () => {
  return {
    type: CLOSE_NOTIFICATION_MODAL
  }
};
