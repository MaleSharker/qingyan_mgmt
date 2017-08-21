/**
 * Created by baichenchen on 2017/8/18.
 */

import {
  REGISTER_PHONE_CHNAGE,
  REGISTER_PASSWORD_CHANGE,
  REGISTER_SMS_CODE_CHANGE,
} from './constants';

/**
 * 输入手机号码
 * @param phone
 * @returns {{type, phone: *}}
 */
export function registerPhoneChange(phone) {
  return {
    type: REGISTER_PHONE_CHNAGE,
    phone,
  }
}

/**
 * 用户输入密码
 * @param pwd
 * @returns {{type, pwd: *}}
 */
export function registerPwdChange(pwd) {
  return {
    type: REGISTER_PASSWORD_CHANGE,
    pwd,
  }
}

/**
 * 用户输入手机验证码
 * @param smsCode
 * @returns {{type, smsCode: *}}
 */
export function registerSmsCodeChange(smsCode) {
  return {
    type: REGISTER_SMS_CODE_CHANGE,
    smsCode,
  }
}
