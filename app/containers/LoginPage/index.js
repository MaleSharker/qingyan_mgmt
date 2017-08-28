/**
 * Created by YCYL on 2017/8/14.
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLogin } from 'containers/App/selectors';
import {
  selectLoginPhone,
  selectLoginPwd,
} from './selectors'
import 'antd/dist/antd.css';
import {  Form, Icon, Input, Checkbox } from 'antd';
import { Link } from 'react-router';
import {
  loginPhoneChanged,
  loginPasswordChanged,
} from './actions';
import {
  repoUserLogin
} from 'containers/App/actions';
import { LoginForm, LoginBtn ,LoginBody ,RightFloatLink } from 'containers/LoginPage/components';
const FormItem = Form.Item;



class Login extends  React.Component {

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
          <LoginBody>
              <LoginForm onSubmit={this.props.handleSubmitForm}>
                  <FormItem>
                      { getFieldDecorator('userName', {
                          rules: [{ required: true, message: 'Please input your username!'}],
                      })(
                        <Input prefix={<Icon type="tablet" style={{fontSize: 13}} />}
                               placeholder="Phone"
                               onChange={this.props.onChangePhone} />
                      )}
                  </FormItem>
                  <FormItem>
                      { getFieldDecorator('password', {
                          rules: [{ required: true, message: 'Please input your password!'}],
                      })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }}/>}
                               type="password"
                               placeholder="Password"
                               onChange={this.props.onChangePassword}/>
                      )}
                  </FormItem>
                  <FormItem>
                      { getFieldDecorator('remember',{
                          valuePropName: 'checked',
                          initialValue: true,
                      })(
                        <Checkbox>Remember me</Checkbox>
                      )}
                      <Link to="/forgetPwd">忘记密码</Link>
                      <LoginBtn type="primary" htmlType="submit">
                          Log in
                      </LoginBtn>
                      <Link to="/register">立即注册</Link>
                      <RightFloatLink to="/codeLogin">验证码登录</RightFloatLink>
                  </FormItem>
              </LoginForm>
          </LoginBody>
        );
    }

}

export function mapDispatchToProps(dispatch) {
    return {
        onChangePhone: (evt) => dispatch(loginPhoneChanged(evt.target.value)),
        onChangePassword: (evt) => dispatch(loginPasswordChanged(evt.target.value)),
        handleSubmitForm: (evt) => {
            if (evt !== undefined && evt.preventDefault) evt.preventDefault();
            dispatch(repoUserLogin());
        },
    };
}

const mapStateToProps = createStructuredSelector({
    phone: selectLoginPhone(),
    pwd: selectLoginPwd(),
});

const WrappedNormalLoginForm = Form.create()(Login);
export default connect(mapStateToProps,mapDispatchToProps)(WrappedNormalLoginForm);