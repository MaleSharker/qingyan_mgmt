/**
 * Created by YCYL on 2017/8/14.
 */

import 'antd/dist/antd.css';
import {  Form, Icon, Input, Checkbox } from 'antd';
import { Link, browserHistory } from 'react-router';
import { LoginForm, LoginBtn ,LoginBody } from './components';
const FormItem = Form.Item;

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLogin } from 'containers/App/selectors';

class Login extends  React.Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        if (this.props.isLogin) {
            console.log('log in - - - ');
            browserHistory.push('/manage')
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((error, values) => {
            if (!error) {
                console.log('Received values of form: ',values);
            }
        });
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <LoginBody>
                <LoginForm onSubmit={this.handleSubmit}>
                    <FormItem>
                        { getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{fontSize: 13}} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        { getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your password!'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }}/>} type="password" placeholder="Password"/>
                        )}
                    </FormItem>
                    <FormItem>
                        { getFieldDecorator('remember',{
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <Link to="/forgetPwd">Forget password</Link>
                        <LoginBtn type="primary" htmlType="submit">
                            Log in
                        </LoginBtn>
                        Or <Link to="/register">register now!</Link>
                    </FormItem>
                </LoginForm>
            </LoginBody>
        );
    }

}

const mapStateToProps = createStructuredSelector({
    isLogin: makeSelectLogin(),
});

const WrappedNormalLoginForm = Form.create()(Login);
export default connect(mapStateToProps)(WrappedNormalLoginForm);