/**
 * Created by baichenchen on 2017/8/27.
 */

import { createSelector } from 'reselect';
const selectCodeLogin = (state) => state.get('codeLogin');

const selectCodeLoginPhone = () => createSelector(
  selectCodeLogin,
  (codeLogin) => codeLogin.get('phone')
);

const selectCodeLoginCode = () => createSelector(
  selectCodeLogin,
  (codeLogin) => codeLogin.get('code')
);

export {
  selectCodeLoginPhone,
  selectCodeLoginCode,
}


