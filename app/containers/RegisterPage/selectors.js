/**
 * Created by baichenchen on 2017/8/18.
 */

import { createSelector } from 'reselect';

const selectRegister = (state) => state.get('register');

//获取注册手机号
const selectRegisterPhone = () => createSelector(
  selectRegister,
  (register) => register.get('phone')
);

//获取注册密码
const selectRegisterPwd = () => createSelector(
  selectRegister,
  (register) => register.get('pwd')
);

//获取填写的手机验证码
const selectRegisterSMSCode = () => createSelector(
  selectRegister,
  (register) => register.get('smsCode')
);

export {
    selectRegisterPhone,
    selectRegisterPwd,
    selectRegisterSMSCode,
}
