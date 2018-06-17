import { AUTH_USER, UNAUTH_USER, FETCHING_USER, FETCH_ALL_USERS, FETCHING_USER_FAILURE, FETCHING_USER_SUCCESS, REMOVE_FETCHING_USER } from '../constants';

const initialUserState = {
  lastUpdated: 0,
  info: {
    name: '',
    uid: '',
    avatar: '',
  },
}

function user (state = initialUserState, action) {
  switch (action.type) {
    case FETCHING_USER_SUCCESS :
      return {
        ...state,
        info: action.user,
        lastUpdated: action.timestamp,
      }
    default :
      return state
  }
}

const initialState = {
  isFetching: true,
  error: '',
  isAuthed: false,
  authedId: '',
  users: []
}

export default function notificationModalusers (state = initialState, action) {
  switch (action.type) {
    case AUTH_USER :
      return {
        ...state,
        isAuthed: true,
        authedId: action.uid,
      }
    case UNAUTH_USER :
      return {
        ...state,
        isAuthed: false,
        authedId: '',
      }
    case FETCHING_USER:
      return {
        ...state,
        isFetching: true,
      }
    case REMOVE_FETCHING_USER:
      return {
        ...state,
        isFetching: false
      }
    case FETCHING_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_USER_SUCCESS:
      return action.user === null
        ? {
          ...state,
          isFetching: false,
          error: '',
        }
        : {
          ...state,
          isFetching: false,
          error: '',
          [action.uid]: user(state[action.uid], action),
        }
      case FETCH_ALL_USERS:
      const users = Object.keys(action.users)
        .reduce((users, key) => {
          users.push(action.users[key]);
          return users;
        }, []);
        return {
          ...state,
          users
        }
    default :
      return state
  }
}
