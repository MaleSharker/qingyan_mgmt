/**
 * Created by baichenchen on 2017/8/18.
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import request from 'utils/request';

import { phoneSignupURL, SMS_ENCODE } from 'utils/netconfig';
import md5 from 'js-md5';

import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_USER_REGISTER } from 'containers/App/constants';
import {
  repoRegisterSuccess,
  repoRegisterError,
} from 'containers/App/actions';

import {
  selectRegisterPhone,
  selectRegisterPwd,
  selectRegisterSMSCode,
} from './selectors';


function* userRegister() {

  const phone = select(selectRegisterPhone());
  const pwd = select(selectRegisterPwd());
  const smsCode = select(selectRegisterSMSCode());
  const verifyCode = md5(phone + SMS_ENCODE);
  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `phone=${phone}&password=${md5(pwd)}&code=${smsCode}&verifyCode=${verifyCode}`,
  };

  try {

    const repos = yield call(request, phoneSignupURL, option);
    const key = repos.userID;
    const token = repos.token;
    yield put(repoRegisterSuccess(key,token));
    browserHistory.push('/manage');
  }catch (err) {
    yield put(repoRegisterError(err));
  };

}

function* registerData() {
  const task = yield takeLatest(LOAD_USER_REGISTER, userRegister);
  yield take(LOCATION_CHANGE);
  yield cancel(task);
}

export default [
  registerData,
];