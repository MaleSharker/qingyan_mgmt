/**
 * Created by YCYL on 2017/8/14.
 */

import { createSelector } from 'reselect';

const selectLogin = (state) => state.get('login');

export const selectLoginPhone = createSelector(
  selectLogin,
  (loginState) => loginState.get('phone'),
);

export const selectLoginPwd = createSelector(
  selectLogin,
  (loginState) => loginState.get('pwd'),
);

export const selectLoginKey = createSelector(
  selectLogin,
  (loginState) => loginState.get('key')
);

export const selectLoginToken = createSelector(
  selectLogin,
  (loginState) => loginState.get('token')
);
