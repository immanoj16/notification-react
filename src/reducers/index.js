import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import notifications from './notifications';
import modal from './modal';
import users from './users';
import notificationModal from './notificationModal';

const reducers = combineReducers({
  notifications,
  modal,
  users,
  notificationModal
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

export default createStore(reducers, {}, composeEnhancers(applyMiddleware(...middleware)));
