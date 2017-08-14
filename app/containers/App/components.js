/**
 * Created by baichenchen on 2017/8/13.
 */

import styled from 'styled-components';
import 'antd/dist/antd.css'

import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';

export const AsideDiv = styled.div`
  position: relative;
  min-height: 100%;
`;

export const AsideLogo = styled.div`
  width: 150px;
  height: 32px;
  background: #333;
  border-radius: 6px;
  margin: 16px 24px 16px 28px;
  transition: all 0.3s ease;
`;

export const AsideSider = styled.div`
  width: 224px;
  background: #404040;
  position: absolute;
  overflow: visible;
  padding-bottom: 24px;
  height: 100%;
  transition: all 0.3s ease;
`;

export const ASMenu = styled(Menu)`
  margin-bottom: 20px;
`;

export const ASMItem = styled(Menu.Item)`
  margin: 16px 0;
  list-style: none;
`;

export const ASMNavText = styled.span`
  vertical-align: baseline;
  display: inline-block;
`;

export const ASMIIcon = styled(Icon)`
  transition: font-size 0.3s;
`;

export const AsideAction = styled.div`
  height: 42px;
  width: 224px;
  position: fixed;
  bottom: 0;
  background: #656565;
  color: #fff;
  text-align: center;
  line-height: 42px;
  cursor: pointer;
  transition: all 0.3s ease;
`;

export const AsideHeader = styled.div`
  background: #fff;
  height: 64px;
  border-bottom: 1px solid #e9e9e9;
`;

export const BreadcrumbDiv = styled.div`
  margin: 7px 0 -17px 24px;
`;

export const AsideMain = styled.div`
  margin-left: 224px;
  transition: all 0.3s ease;
`;

export const AsideContainer = styled.div`
  margin: 24px 16px;
`;

export const AsideContent = styled.div`
  background: #fff;
  padding: 24px;
  overflow: auto;
`;

export const AsideFooter = styled.div`
  height: 64px;
  line-height: 64px;
  text-align: center;
  font-size: 12px;
  color: #999;
  background: #fff;
  border-top: 1px solid #e9e9e9;
  width: 100%
`;