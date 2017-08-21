/**
 * Created by baichenchen on 2017/8/20.
 */

import { fromJS } from 'immutable';
import {
  REGISTER_PHONE_CHNAGE,
  REGISTER_PASSWORD_CHANGE,
  REGISTER_SMS_CODE_CHANGE,
} from './constants';

const initialState = fromJS({
  phone: '',
  pwd: '',
  smsCode: '',
});

function userRegisterReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_PHONE_CHNAGE:
      return state
        .set('phone',action.phone);
    case REGISTER_PASSWORD_CHANGE:
      return state
        .set('pwd',action.pwd);
    case REGISTER_SMS_CODE_CHANGE:
      return state
        .set('smsCode',action.smsCode);
    default:
      return state;
  }
}

export default userRegisterReducer;

