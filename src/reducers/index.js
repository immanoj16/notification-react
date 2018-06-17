import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

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

const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(...middleware)));

export default store;
