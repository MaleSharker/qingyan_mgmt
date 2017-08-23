/**
 * Created by baichenchen on 2017/8/18.
 */
import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import request from 'utils/request';

import { phoneSignupURL, SMS_ENCODE, postOptions } from 'utils/netconfig';
import md5 from 'js-md5';

import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_USER_REGISTER } from 'containers/App/constants';
import {
  repoRegisterSuccess,
  repoRegisterError,
} from 'containers/App/actions';

import {
    selectLoginKey,
    selectLoginToken,
} from 'containers/App/selectors';

import {
  selectRegisterPhone,
  selectRegisterPwd,
  selectRegisterSMSCode,
} from './selectors';



function* userRegister() {
  const key = yield select(selectLoginKey());
  const token = yield select(selectLoginToken());
  const phone = yield select(selectRegisterPhone());
  const pwd = yield select(selectRegisterPwd());
  const smsCode = yield select(selectRegisterSMSCode());
  const verifyCode = md5(phone + SMS_ENCODE);
  postOptions.headers.set('key',key);
  postOptions.headers.set('token',token);
  postOptions.body = `phone=${phone}&password=${md5(pwd)}&code=${smsCode}&verifyCode=${verifyCode}`;

  try {

    const repos = yield call(request, phoneSignupURL, postOptions);
    if (repos.status == 1) {
      const key = repos.result.key;
      const token = repos.result.token;
      yield put(repoRegisterSuccess(key,token,phone));
      browserHistory.push('/manage');
    }else {
      yield put(repoRegisterError(repos));
    }

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