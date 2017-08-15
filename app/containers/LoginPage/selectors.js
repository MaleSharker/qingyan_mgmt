/**
 * Created by YCYL on 2017/8/14.
 */

import { createSelector } from 'reselect';

const selectLogin = (state) => state.get('login');

const selectLoginPhone = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('phone'),
);

const selectLoginPwd = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('pwd'),
);




export {
    selectLogin,
    selectLoginPhone,
    selectLoginPwd,
}