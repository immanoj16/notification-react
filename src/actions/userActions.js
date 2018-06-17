import { AUTH_USER, UNAUTH_USER, FETCHING_USER, FETCH_ALL_USERS, FETCHING_USER_FAILURE, FETCHING_USER_SUCCESS, REMOVE_FETCHING_USER } from '../constants';
import auth, { logout, saveUser } from '../helpers/auth';
import { formatUserInfo } from '../helpers/utils';
import { fetchUsers } from '../helpers/api';

export function authUser (uid) {
  return {
    type: AUTH_USER,
    uid,
  }
}

function unauthUser () {
  return {
    type: UNAUTH_USER,
  }
}

function fetchingUser () {
  return {
    type: FETCHING_USER,
  }
}

export const fetchAllUsers = (users) => {
  return {
    type: FETCH_ALL_USERS,
    users
  }
}

function fetchingUserFailure (error) {
  console.warn(error)
  return {
    type: FETCHING_USER_FAILURE,
    error: 'Error fetching user.',
  }
}

export const removeFetchingUser = () => {
  return {
    type: REMOVE_FETCHING_USER
  }
}

export function fetchingUserSuccess (uid, user, timestamp) {
  return {
    type: FETCHING_USER_SUCCESS,
    uid,
    user,
    timestamp,
  }
}

export const fetchAndHandleAuthedUser = () => {
  return (dispatch) => {
    dispatch(fetchingUser());
    return auth()
      .then(({user, credential}) => {
        const userData = user.providerData[0];
        const userInfo = formatUserInfo(userData.displayName, userData.photoURL, user.uid);
        return dispatch(fetchingUserSuccess(userInfo.uid, userInfo, Date.now()));
      })
      .then(({user}) => saveUser(user))
      .then((user) => dispatch(authUser(user.uid)))
      .catch(error => dispatch(fetchingUserFailure(error)))
  }
};

export const logoutAndUnAuth = () => {
  return dispatch => {
    logout();
    dispatch(unauthUser());
  }
};

export const fetchingUsers = () => {
  return dispatch => {
    fetchUsers()
      .then(users => dispatch(fetchAllUsers(users)));
  }
}
