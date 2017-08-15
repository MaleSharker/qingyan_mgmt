/**
 * Created by YCYL on 2017/8/14.
 */


import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { phoneLoginURL } from 'server/netconfig';

import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_USER_LOGIN } from './constants';
import {
  repoLoginSuccess,
  repoLoginError,
} from './actions';
import {
  selectLoginPhone,
  selectLoginPwd,
} from './selectors'


function* userAuth() {

  const phone = yield select(selectLoginPhone());
  const pwd = yield select(selectLoginPwd());

  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      phone: phone,
      password: pwd,
    })
  };

  try {
    yield call()
  }catch (err){
    yield
  }

}

export function* loginData() {

  const watcher = yield takeLatest(LOAD_USER_LOGIN, userAuth);

  yield take(LOCATION_CHANGE);

  yield cancel(watcher);

}
