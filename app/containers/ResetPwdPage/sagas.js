/**
 * Created by baichenchen on 2017/8/28.
 */

import { take,takeLatest, call, put, select} from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import md5 from 'js-md5';

import {
  RESET_PASSWORD_ACTION,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
} from './constants';

import {
  resetPwdSuccess,
  resetPwdError,
} from './actions';

import {
  selectResetOldPwd,
  selectResetNewPwd,
} from './selectors';


function* resetPwdAction() {

  let

}


function* postResetPwd() {
  const task = yield takeLatest(RESET_PASSWORD_ACTION,resetPwdAction);
  yield take(LOCATION_CHANGE);
  yield cancel(task);
}

export default [
  postResetPwd
];