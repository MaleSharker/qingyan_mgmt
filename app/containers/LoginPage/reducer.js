/**
 * Created by YCYL on 2017/8/14.
 */

import { fromJS } from 'immutable';

import {
  LOAD_USER_LOGIN,
  LOAD_LOGIN_SUCCESS,
  LOAD_LOGIN_ERROR,
  PHONE_CHANGE,
  PWD_CHANGE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  phone: '',
  pwd: '',
  key: '',
  token: '',
});

function userLoginReducer(state = initialState, action) {
  switch (action.type){
    case LOAD_USER_LOGIN:
      return state;
    case LOAD_LOGIN_SUCCESS:
      return state
        .set('isLogin',true);
    case LOAD_LOGIN_ERROR:
      return state
        .set('isLogin',false);
    case PHONE_CHANGE:
      return state
        .set('phone',action.phone);
    case PWD_CHANGE:
      return state
        .set('pwd',action.pwd);
    default:
      return state;
  }
}

export default userLoginReducer;