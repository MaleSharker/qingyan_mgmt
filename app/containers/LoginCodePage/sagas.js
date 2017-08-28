/**
 * Created by baichenchen on 2017/8/27.
 */

import { put, takeLatest, call, take, select, cancel} from 'redux-saga/effects';
import request from 'utils/request';

import { smsCodeLoginURL, SMS_ENCODE, postOptions } from 'utils/netconfig';
import md5 from 'js-md5';

import { LOCATION_CHANGE } from 'react-router-redux';
import { browserHistory } from 'react-router';
import {
  LOAD_USER_CODE_LOGIN,
  LOAD_LOGIN_SUCCESS,
  LOAD_LOGIN_ERROR,
} from 'containers/App/constants';

import {
  repoLoginSuccess,
  repoLoginError,
} from 'containers/App/actions';

import {
  selectCodeLoginCode,
  selectCodeLoginPhone,
} from './selectors';


function* userCodeLoginAuth() {

  const phone = yield select(selectCodeLoginPhone());
  const code = yield select(selectCodeLoginCode());

  let verifyCode = md5(phone + SMS_ENCODE);
  postOptions.body = `phone=${phone}&verifyCode=${verifyCode}&code=${code}`;

  try {
    const result = yield call(request,smsCodeLoginURL,postOptions);
    const status = result.status;
    console.log('- - - - ',result);
    if (status == 1) {
      yield put(repoLoginSuccess(result.result.key,result.result.token,phone));
      browserHistory.push('/manage');
    }else {
      yield put(repoLoginError({err:result.msg}));
    }
  }catch (err){
    yield put(repoLoginError({err}));
  }

}

function* postCodeLogin() {
  const task = yield takeLatest(LOAD_USER_CODE_LOGIN,userCodeLoginAuth);
  yield take(LOCATION_CHANGE);
  yield cancel(task);
}

export default [
  postCodeLogin,
];
