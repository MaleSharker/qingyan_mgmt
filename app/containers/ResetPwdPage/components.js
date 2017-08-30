/**
 * Created by baichenchen on 2017/8/28.
 */

import styled from 'styled-components';
import { Form, Icon, Input, Button, message } from 'antd';
const FormItem = Form.Item;

export const ResetDiv = styled.div`
    min-height: 400px;
`;

export const SIcon = styled(Icon)``;

export const SButton = styled(Button)``;

export const SInput = styled(Input)``;

export const SItem = styled(FormItem)`
    width: 100%;
    margin-top: 15px;
`;

export const SForm = styled(Form)`
    width: 100%;
    float: center;
    text-align: center;
    min-width: 200px;
`;

export const smessage = message;