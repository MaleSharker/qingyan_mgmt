/**
 * Created by baichenchen on 2017/8/28.
 */

import { createSelector } from 'reselect';

const selectResetPwd = (state) => state.get('resetPwd');

const selectResetOldPwd = () => createSelector(
  selectResetPwd,
  (reset) => reset.get('oldPwd')
);

const selectResetNewPwd = () => createSelector(
  selectResetPwd,
  (reset) => reset.get('newPwd'),
);

export {
  selectResetOldPwd,
  selectResetNewPwd,
};