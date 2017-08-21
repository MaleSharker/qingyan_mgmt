/**
 * Created by baichenchen on 2017/8/18.
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectRegisterPhone } from './selectors';
import { repoUserRegister } from 'containers/App/actions';
import {
  registerPhoneChange,
  registerPwdChange,
  registerSmsCodeChange,
} from './actions';
import 'antd/dist/antd.css';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;


const ICPSelector = styled(Select)`
  width: 60px;
`;

const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

class RegistrationForm extends React.Component {

  state = {
    confirmDirty: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.handleSubmitDispatch()
      }
    });
  };

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  checkAgreement = (rule, value, callback) => {
    const form = this.props.form;
    if (value){
      console.log('check box value - - - ',value);
      form.validateFields(['checked'], { force: true });
    }
    callback();
  };

  render() {
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
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <ICPSelector>
        <Option value="86">+86</Option>
      </ICPSelector>
    );

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="Phone Number"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(
            <Input addonBefore={prefixSelector}
                   onChange={this.props.handlePhoneChange}/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Captcha"
          extra="We must make sure that your are a human."
        >
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: 'Please input the captcha you got!' }],
              })(
                <Input size="large"
                       onChange={this.props.handlePwdChange}/>
              )}
            </Col>
            <Col span={12}>
              <Button size="large">Get captcha</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Password"
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.checkConfirm,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Confirm Password"
          hasFeedback
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} onChange={this.props.handleSMSCodeChange}/>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
          {getFieldDecorator('agreement', {
            rules: [{
              required: true, message: 'Please check aggrement.',
            }, {
              validator: this.checkAgreement,
            }],
            valuePropName: 'checked',

          })(
            <Checkbox>I have read the <Link>agreement</Link></Checkbox>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">Register</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export function mapDispatchToProps(dispatch) {
  return {
    handlePhoneChange: (evt) => {
      evt.preventDefault();
      const phone = evt.target.value;
      dispatch(registerPhoneChange(phone));
    },
    handlePwdChange: (evt) => {
      evt.preventDefault();
      const pwd = evt.target.value;
      dispatch(registerPwdChange(pwd));
    },
    handleSMSCodeChange: (evt) => {
      evt.preventDefault();
      const smsCode = evt.target.value;
      dispatch(registerSmsCodeChange(smsCode));
    },
    handleSubmitDispatch: () => {
      dispatch(repoUserRegister());
    }
  }
}

const mapStateToProps = createStructuredSelector({
  phone: selectRegisterPhone()
});


export default connect(mapStateToProps, mapDispatchToProps)(WrappedRegistrationForm);
