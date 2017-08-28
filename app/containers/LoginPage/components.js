/**
 * Created by YCYL on 2017/8/14.
 */

import styled from 'styled-components';
import { Button, Form } from 'antd';
import { Link } from 'react-router';

export const LoginForm = styled(Form)`
    max-width: 300px;
`;

export const ForgetA = styled.a`
    float: right;
`;

export const LoginBtn = styled(Button)`
    width: 100%;
`;

export const LoginBody = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const RightFloatLink = styled(Link)`
    text-align: right;
    float: right;
`;

