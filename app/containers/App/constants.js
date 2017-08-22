/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
export const DEFAULT_LOCALE = 'en';

//用户登录
export const LOAD_USER_LOGIN = 'boilerplate/Login/LOAD_USER_LOGIN';
export const LOAD_LOGIN_SUCCESS = 'boilerplate/Login/LOAD_LOGIN_SUCCESS';
export const LOAD_LOGIN_ERROR = 'boilerplate/Login/LOAD_LOGIN_ERROR';

//用户手机号注册
export const LOAD_USER_REGISTER = 'boilerplate/Register/LOAD_USER_REGISTER';
export const LOAD_REGISTER_SUCCESS = 'boilerplate/Register/LOAD_REGISTER_SUCCESS';
export const LOAD_REGISTER_ERROR = 'boilerplate/Register/LOAD_REGISTER_ERROR';

//获取手机验证码
export const LOAD_SMS_CODE_REGISTER = 'boilerplate/SMSCode/LOAD_SMS_CODE_REGISTER';
export const LOAD_SMS_CODE_LOGIN = 'boilerplate/SMSCode/LOAD_SMS_CODE_LOGIN';
export const LOAD_SMS_CODE_RETRIEVE = 'boilerplate/SMSCode/LOAD_SMS_CODE_RETRIEVE';