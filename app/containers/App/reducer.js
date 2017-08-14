/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  LOAD_USER_LOGIN,
  LOAD_LOGIN_SUCCESS,
  LOAD_LOGIN_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  isLogin: true,
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], action.repos)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_REPOS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

function userLogin(state = initialState, action) {
  switch (action.type){
    case LOAD_USER_LOGIN:
      return state;
    case LOAD_LOGIN_SUCCESS:
      return state
          .set('isLogin',true);
    case LOAD_LOGIN_ERROR:
      return state
          .set('isLogin',false);
    default:
      return state;
  }
}

// export  {
//     appReducer,
//     userLogin,
// };
export default appReducer;
