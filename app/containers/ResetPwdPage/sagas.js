/**
 * Created by baichenchen on 2017/8/28.
 */

import { message } from 'antd';
import { take, takeLatest, call, put, select, cancel} from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import md5 from 'js-md5';
import { resetPasswordURL, postOptions} from 'utils/netconfig';
import request from 'utils/request'
import {
  RESET_PASSWORD_ACTION,
} from './constants';

import { selectResetNewPwd, selectResetOldPwd } from './selectors';

import {
    selectLoginKey,
    selectLoginToken,
} from 'containers/App/selectors';

export function* resetPwdAction() {

  const key = yield select(selectLoginKey());
  const token = yield select(selectLoginToken());
  const oldPwd = yield select(selectResetOldPwd());
  const newPwd = yield select(selectResetNewPwd());
  console.log(' - - - - ',key,token,oldPwd,newPwd);
  postOptions.headers.set('key',key);
  postOptions.headers.set('token',token);
  postOptions.body = `password=${md5(newPwd)}&oldPassword=${md5(oldPwd)}`;

  try {
    const response = yield call(request, resetPasswordURL, postOptions);
    const status = response.status;
    if (status == 1) {
      message.success('修改密码成功',3);
    }else {
      message.error(`修改密码失败,${response.msg}`,3);
    }
  }catch (error){
    message.error(`${error.toString()}`,3);
  }

}


export function* resetPwdPageWatcher() {
  const task = yield takeLatest(RESET_PASSWORD_ACTION,resetPwdAction);
  yield take(LOCATION_CHANGE);
  yield cancel(task);
}

export default [
  resetPwdPageWatcher,
];