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

/**
 * 没有消息就是最好的消息
 */

import { fromJS } from 'immutable';
import { message } from 'antd';

import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  LOAD_USER_CODE_LOGIN,
  LOAD_USER_LOGIN,
  LOAD_LOGIN_SUCCESS,
  LOAD_LOGIN_ERROR,
  LOAD_USER_REGISTER,
  LOAD_REGISTER_SUCCESS,
  LOAD_REGISTER_ERROR,
  LOAD_SMS_CODE_REGISTER,
  LOAD_SMS_CODE_LOGIN,
  LOAD_SMS_CODE_RETRIEVE,
  LOAD_USER_LOGOUT,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  isLogin: false,
  key: '',
  token: '',
  phone: '',
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
    case LOAD_USER_LOGOUT:
      return state
          .set('isLogin',false)
          .set('key','')
          .set('token','')
          .set('phone','');
    case LOAD_USER_LOGIN:
    case LOAD_USER_CODE_LOGIN:
    case LOAD_USER_REGISTER:
      return state;
    case LOAD_LOGIN_SUCCESS:
    case LOAD_REGISTER_SUCCESS:
      return state
          .set('isLogin',true)
          .set('key',`${action.key}`)
          .set('token', action.token)
          .set('phone', action.phone);
    case LOAD_LOGIN_ERROR:
    case LOAD_REGISTER_ERROR:
      message.error(`${action.error}`,3);
      return state;
    case LOAD_SMS_CODE_REGISTER:
    case LOAD_SMS_CODE_LOGIN:
    case LOAD_SMS_CODE_RETRIEVE:
      return state
          .set('phone',action.phone);
    default:
      return state;
  }
}


export default appReducer;
