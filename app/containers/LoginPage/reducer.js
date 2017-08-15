/**
 * Created by YCYL on 2017/8/14.
 */

import { fromJS } from 'immutable';

import {
  PHONE_CHANGE,
  PWD_CHANGE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  phone: '',
  pwd: '',
});

function userLoginReducer(state = initialState, action) {
  switch (action.type){
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