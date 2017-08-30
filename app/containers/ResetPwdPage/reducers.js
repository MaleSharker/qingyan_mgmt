/**
 * Created by baichenchen on 2017/8/28.
 */

import {
  RESET_PASSWORD_ACTION,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
} from './constants';
import { fromJS } from 'immutable';
import { message } from 'antd';

const initialState = fromJS({
  oldPwd: '',
  newPwd: '',
});

function resetPwdReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_PASSWORD_ACTION:
      return state
        .set('oldPwd',action.oldPwd)
        .set('newPwd',action.newPwd);
      break;
    case RESET_PASSWORD_ERROR:
      return state;
    case RESET_PASSWORD_SUCCESS:
      return state;
    default:
      return state;
  }
}

export default resetPwdReducer;
