import { combineReducers } from 'redux';

import notifications from './notifications';
import modal from './modal';
import users from './users';
import notificationModal from './notificationModal';


export default combineReducers({
  notifications,
  modal,
  users,
  notificationModal
});
