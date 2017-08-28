/**
 * Created by baichenchen on 2017/8/27.
 */


import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLogin } from 'containers/App/selectors';
import 'antd/dist/antd.css';
import {  Form, Icon, Input, Checkbox, Row, Col, Button } from 'antd';
import { Link } from 'react-router';
import {
  codeLoginPhoneChange,
  codeLoginSMSChange,
} from './actions';
import {
  repoSMSCodeLogin,
  repoUserCodeLogin,
} from 'containers/App/actions';
import { LoginForm, LoginBtn ,LoginBody ,RightFloatLink } from 'containers/LoginPage/components';
import { FloatBtn} from './components'
const FormItem = Form.Item;


class Login extends  React.Component {

  handleSmsCodeAction = () => {
    this.props.form.validateFields(['phone'],{len: 11}, (err, value) => {
      if (!err) {
        this.props.getLoginCode(value.phone);
      }
    });
  };

  render(){
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    return (
      <LoginBody>
        <LoginForm onSubmit={this.props.handleSubmitForm}>
          <FormItem>
            { getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input your username!'}],
            })(
              <Input prefix={<Icon type="tablet" style={{fontSize: 13}} />}
                     placeholder="手机号"
                     size="large"
                     onChange={this.props.onChangePhone} />
            )}
          </FormItem>
          <FormItem>
            <Row gutter={8}>
              <Col span={12}>
                {getFieldDecorator('verifyCode', {
                  rules: [{ required: true, message: 'Please input the captcha you got!' }],
                })(
                  <Input prefix={<Icon type="paper-clip" style={{fontSize: 14}} />}
                         size="large"
                         placeholder="验证码"
                         onChange={this.props.onChangeCode}/>
                )}
              </Col>
              <Col span={12}>
                <FloatBtn size="large"
                          onClick={this.handleSmsCodeAction}>
                  获取验证码
                </FloatBtn>
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <LoginBtn type="primary" htmlType="submit">
              登录
            </LoginBtn>
            已有账号,返回<Link to="/">登录</Link>
          </FormItem>
        </LoginForm>
      </LoginBody>
    );
  }

}

export function mapDispatchToProps(dispatch) {
  return {
    onChangePhone: (evt) => dispatch(codeLoginPhoneChange(evt.target.value)),
    onChangeCode: (evt) => dispatch(codeLoginSMSChange(evt.target.value)),
    getLoginCode: (phone) => dispatch(repoSMSCodeLogin(phone)),
    handleSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(repoUserCodeLogin());
    },
  };
}

const mapStateToProps = createStructuredSelector({
});

const WrappedNormalLoginForm = Form.create()(Login);
export default connect(mapStateToProps,mapDispatchToProps)(WrappedNormalLoginForm);

