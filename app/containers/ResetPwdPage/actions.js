/**
 * Created by baichenchen on 2017/8/28.
 */

import {
  RESET_PASSWORD_ACTION,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
} from './constants';

export function resetPwdAction(newPwd,oldPwd) {
  return {
    type: RESET_PASSWORD_ACTION,
    newPwd,
    oldPwd,
  }
}

export function resetPwdError(error) {
  return {
    type:RESET_PASSWORD_ERROR,
    error
  }
}

export function resetPwdSuccess() {
  return {
    type: RESET_PASSWORD_SUCCESS
  }
}

