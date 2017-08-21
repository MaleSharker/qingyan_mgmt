/**
 * Created by YCYL on 2017/8/14.
 */

import {
  PHONE_CHANGE,
  PWD_CHANGE,
} from './constants';

/**
 * 用户输入电话号码
 * @param phone
 * @returns {{type, phone: *}}
 */
export function loginPhoneChanged(phone) {
  return {
    type: PHONE_CHANGE,
    phone,
  }
}

/**
 * 用户输入密码
 * @param pwd
 * @returns {{type, pwd: *}}
 */
export function loginPasswordChanged(pwd) {
  return {
    type: PWD_CHANGE,
    pwd,
  }
}

