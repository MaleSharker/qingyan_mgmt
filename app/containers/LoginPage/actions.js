/**
 * Created by YCYL on 2017/8/14.
 */

import {
  LOAD_USER_LOGIN,
  LOAD_LOGIN_SUCCESS,
  LOAD_LOGIN_ERROR,
  PHONE_CHANGE,
  PWD_CHANGE,
} from './constants';

/**
 * 用户登录
 * @returns {{type}}
 */
export function repoUserLogin(phone,pwd) {
  return {
    type: LOAD_USER_LOGIN,
    phone,
    pwd,
  }
}


/**
 * 用户登录成功
 * @param key
 * @param token
 * @returns {{type, key: *, token: *}}
 */
export function repoLoginSuccess(key,token) {
  return {
    type: LOAD_LOGIN_SUCCESS,
    key,
    token,
  };
}

/**
 * 用户登录失败
 * @param error
 * @returns {{type, error: *}}
 */
export function repoLoginError(error) {
  return {
    type: LOAD_LOGIN_ERROR,
    error,
  }
}

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

