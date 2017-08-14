/**
 * Created by YCYL on 2017/8/14.
 */


import React from 'react';
import 'antd/dist/antd.css'
import { Menu } from 'antd';
import Breadcrumb from 'antd/lib/breadcrumb';
import { Link } from 'react-router';
const SubMenu = Menu.SubMenu;

import { AsideDiv , AsideLogo, AsideSider ,ASMenu ,ASMItem ,ASMNavText ,
    ASMIIcon ,AsideAction ,BreadcrumbDiv ,AsideMain ,AsideContainer,
    AsideContent ,AsideFooter} from './components'

const AsideCollapse = React.createClass({
    getInitialState() {
        return {
            collapse: true,
        };
    },
    onCollapseChange() {
        console.log('4 - - - ');
    },
    render() {
            return (
                <AsideDiv>
                    <AsideSider>
                        <AsideLogo></AsideLogo>
                        <ASMenu mode="inline" theme="dark" defaultSelectedKeys={['user-list']}>
                            <SubMenu key="user" title={<ASMNavText><ASMIIcon type="user"></ASMIIcon><ASMNavText>用户管理</ASMNavText></ASMNavText>}>
                                <ASMItem key="user-list">
                                    <Link to="/manage"><ASMNavText>用户列表</ASMNavText></Link>
                                </ASMItem>
                                <ASMItem key="user-add">
                                    <Link to="/features"><ASMNavText>添加用户</ASMNavText></Link>
                                </ASMItem>
                            </SubMenu>
                            <SubMenu key="tenant" title={<ASMNavText><ASMIIcon type="shop"></ASMIIcon><ASMNavText>商铺</ASMNavText></ASMNavText>}>
                                <ASMItem key="manageTenant">
                                    <Link to="/manageTenant"><ASMNavText>商铺管理</ASMNavText></Link>
                                </ASMItem>
                                <ASMItem key="manageBrand">
                                    <Link to="/manageBrand"><ASMNavText>品牌管理</ASMNavText></Link>
                                </ASMItem>
                                <ASMItem key="manageAttribute">
                                    <Link to="/manageAttribute"><ASMNavText>属性管理</ASMNavText></Link>
                                </ASMItem>
                                <ASMItem key="manageGoods">
                                    <Link to="/manageGoods"><ASMNavText>商品管理</ASMNavText></Link>
                                </ASMItem>
                            </SubMenu>
                            <SubMenu key="orders" title={<ASMNavText><ASMIIcon type="pushpin-o"></ASMIIcon><ASMNavText>订单管理</ASMNavText></ASMNavText>}>
                                <ASMItem key="orderList">
                                    <Link to="/orderList"><ASMNavText>订单列表</ASMNavText></Link>
                                </ASMItem>
                                <ASMItem key="orderSettle">
                                    <Link to="/orderSettle"><ASMNavText>订单结算</ASMNavText></Link>
                                </ASMItem>
                            </SubMenu>
                            <SubMenu key="statistics" title={<ASMNavText><ASMIIcon type="pie-chart"></ASMIIcon><ASMNavText>统计</ASMNavText></ASMNavText>}>
                                <ASMItem key="statistics">
                                    <ASMNavText>统计图</ASMNavText>
                                </ASMItem>
                            </SubMenu>
                        </ASMenu>
                        <AsideAction onClick={this.onCollapseChange}>
                            <ASMIIcon type="coffee" /><ASMNavText>退出系统</ASMNavText>
                        </AsideAction>
                    </AsideSider>
                    <AsideMain>
                        {/*<AsideHeader></AsideHeader>*/}
                        <BreadcrumbDiv>
                            <Breadcrumb>
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                                <Breadcrumb.Item>应用列表</Breadcrumb.Item>
                                <Breadcrumb.Item>某应用</Breadcrumb.Item>
                            </Breadcrumb>
                        </BreadcrumbDiv>
                        <AsideContainer>
                            <AsideContent>
                                {this.props.nodeChildren}
                            </AsideContent>
                        </AsideContainer>
                        <AsideFooter>
                            版权所有 © Navy Development Company
                        </AsideFooter>
                    </AsideMain>
                </AsideDiv>
            );
    },
});

AsideCollapse.propTypes = {
    children: React.PropTypes.node,
};

export default AsideCollapse;
