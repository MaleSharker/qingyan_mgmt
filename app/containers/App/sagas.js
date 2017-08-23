/**
 * Created by YCYL on 2017/8/22.
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { smsCodeURL, SMS_ENCODE, postOptions } from 'utils/netconfig';
import md5 from 'js-md5';

import { LOCATION_CHANGE } from 'react-router-redux';
import {
    LOAD_SMS_CODE_REGISTER,
    LOAD_SMS_CODE_LOGIN,
    LOAD_SMS_CODE_RETRIEVE,
} from './constants';

import {
    selectUserPhone,
} from './selectors';

function* postRequest(type) {
    let phone = yield select(selectUserPhone());
    let verifyCode = md5(phone + SMS_ENCODE);
    postOptions.body = `phone=${phone}&verifyCode=${verifyCode}&smsType=${type}`;

    try {
        yield call(request, smsCodeURL, postOptions);
    }catch (err) {

    }

}

function* getSMSCode() {
    yield takeLatest(LOAD_SMS_CODE_REGISTER,postRequest,'register');
    yield takeLatest(LOAD_SMS_CODE_LOGIN,postRequest,'login');
    yield takeLatest(LOAD_SMS_CODE_RETRIEVE, postRequest,'retrieve');
}

export default [
    getSMSCode,
];


