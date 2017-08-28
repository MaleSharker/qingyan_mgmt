/**
 * Created by baichenchen on 2017/8/27.
 */


import { fromJS } from 'immutable';
import { LOGIN_CODE_PHONE_CHANGE, LOGIN_CODE_SMS_CHANGE } from './constants';

const initialState = fromJS({
  phone: "",
  code: "",
});

function codeLoginReducer(state=initialState,action) {
  switch (action.type) {
    case LOGIN_CODE_PHONE_CHANGE:
      return state
        .set('phone',action.phone);
    case LOGIN_CODE_SMS_CHANGE:
      return state
        .set('code',action.code);
    default:
      return state;
  }
}

export default codeLoginReducer;



