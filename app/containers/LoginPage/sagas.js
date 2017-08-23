/**
 * Created by YCYL on 2017/8/14.
 */


import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import request from 'utils/request';

import { phoneLoginURL } from 'utils/netconfig';
import md5 from 'js-md5';

import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_USER_LOGIN } from 'containers/App/constants';
import {
  repoLoginSuccess,
  repoLoginError,
} from 'containers/App/actions';
import {
  selectLoginPhone,
  selectLoginPwd,
} from 'containers/LoginPage/selectors'


export function* userAuth() {

  const phone = yield select(selectLoginPhone());
  const pwd = yield select(selectLoginPwd());
  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `phone=${phone}&password=${md5(pwd)}`,
  };
  try {
    const repos = yield call(request, phoneLoginURL,option);
    yield put(repoLoginSuccess(repos.result.user.userID, repos.result.user.token, phone));
    browserHistory.push('/manage');
  }catch (err){
    yield put(repoLoginError(err));
  }
}

export function* loginData() {
  const watcher = yield takeLatest(LOAD_USER_LOGIN, userAuth);

  yield take(LOCATION_CHANGE);

  yield cancel(watcher);

}

export default [
    loginData,
];
