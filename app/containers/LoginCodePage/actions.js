/**
 * Created by baichenchen on 2017/8/27.
 */

import { LOGIN_CODE_PHONE_CHANGE, LOGIN_CODE_SMS_CHANGE} from './constants';

export function codeLoginPhoneChange(phone) {
  return {
    type: LOGIN_CODE_PHONE_CHANGE,
    phone,
  }
}

export function codeLoginSMSChange(code) {
  return {
    type: LOGIN_CODE_SMS_CHANGE,
    code,
  }
}
