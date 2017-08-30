/**
 * Created by baichenchen on 2017/8/28.
 */


import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Form } from 'antd';
import { ResetDiv, SForm, SItem, SButton, SIcon, SInput, smessage } from './components';

import { resetPwdAction } from './actions';

class ResetPwdPage extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err,values) => {
            if (!err){
                console.log('values - - - ',values);
                if (values.confirmPwd == values.newPwd) {
                    this.props.submitDispatch(values.newPwd,values.oldPwd);
                }else {
                    smessage.error('两次输入密码不一致',3);
                }
            }
        });
    };

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        return (
            <SForm layout="inline" onSubmit={this.handleSubmit}>
                <SItem>
                    {getFieldDecorator('oldPwd', {
                        rules: [{ required: true, message: '请输入旧密码'}],
                    })(
                        <SInput prefix={<SIcon type="lock" style={{ fontSize: 13 }} />}
                                type="password"
                                placeholder="输入旧密码"/>
                    )}
                </SItem>
                <SItem>
                    {getFieldDecorator('newPwd', {
                        rules: [{required: true, message: '请输入新密码'}],
                    })(
                        <SInput prefix={<SIcon type="lock" style={{ fontSize: 13 }} />}
                                type="password"
                                placeholder="输入新密码"/>
                    )}
                </SItem>
                <SItem>
                    {getFieldDecorator('confirmPwd', {
                        rules: [{required: true, message: '再次输入密码以确认'}],
                    })(
                        <SInput prefix={<SIcon type="lock" style={{ fontSize: 13}} />}
                                type="password"
                                placeholder="再次输入新密码" />
                    )}
                </SItem>
                <SItem>
                    <SButton type="primary" htmlType="submit">
                        确认
                    </SButton>
                </SItem>
            </SForm>
        );
    }

}

const WrappedPage = Form.create()(ResetPwdPage);

export function mapDispatchToProps(dispatch) {
    return {
        submitDispatch: (newPwd,oldPwd) => {
            dispatch(resetPwdAction(newPwd,oldPwd));
        },
    }
}

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps, mapDispatchToProps)(WrappedPage);


