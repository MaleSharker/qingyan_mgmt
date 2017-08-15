/**
 * Created by YCYL on 2017/8/15.
 */


const baseUrl = "http://192.168.0.157:3000";

//获取验证码
export const smsCodeURL = `${baseUrl}/client/v1/user/SMSCode`;

//手机注册
export const phoneSignupURL = `${baseUrl}/client/v1/user/phoneSignup`;

//用户重设密码
export const resetPasswordURL = `${baseUrl}/client/v1/user/resetPassword`;

//用户手机登录
export const phoneLoginURL = `${baseUrl}/client/v1/user/phoneLogin`;

//短信验证码登录
export const smsCodeLoginURL = `${baseUrl}/client/v1/user/smsCodeLogin`;

//更新用户信息
export const updateProfileURL = `${baseUrl}/client/v1/user/updateProfile`;

//用户上传头像
export const uploadHeadImgURL = `${baseUrl}/client/v1/user/uploadHeadImg`;
