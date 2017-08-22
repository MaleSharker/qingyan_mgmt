/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectLogin = () => createSelector(
    selectGlobal,
    (globalState) => globalState.get('isLogin')
);

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentUser')
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectRepos = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'repositories'])
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const selectLoginKey = () => createSelector(
    selectGlobal,
    (globalState) => globalState.get('key')
);

const selectLoginToken = () => createSelector(
    selectGlobal,
    (globalState) => globalState.get('token')
);

const selectUserPhone = () => createSelector(
    selectGlobal,
    (globalState) => globalState.get('phone')
);

export {
  selectGlobal,
  makeSelectLogin,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocationState,
  selectLoginKey,
  selectLoginToken,
  selectUserPhone,
};
