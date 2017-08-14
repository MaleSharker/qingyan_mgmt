/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

// import React from 'react';
// import Helmet from 'react-helmet';
// import styled from 'styled-components';
//
// import Header from 'components/Header';
// import Footer from 'components/Footer';
// import withProgressBar from 'components/ProgressBar';

// const AppWrapper = styled.div`
//   max-width: 100%;
//   margin: 0 auto;
//   display: flex;
//   min-height: 100%;
//   padding: 0 16px;
//   flex-direction: column;
//   background: #f5f5f5;
// `;


// export function App(props) {
//   return (
//     <div>
//       <Helmet
//         titleTemplate="%s - React.js Boilerplate"
//         defaultTitle="React.js Boilerplate"
//         meta={[
//           { name: 'description', content: 'A React.js Boilerplate application' },
//         ]}
//       />
//       {/*<Header />*/}
//       {React.Children.toArray(props.children)}
//       <Footer />
//     </div>
//   );
// }
//
// App.propTypes = {
//   children: React.PropTypes.node,
// };
//
// export default withProgressBar(App);


import Menu from 'antd/lib/menu';
import Breadcrumb from 'antd/lib/breadcrumb';
import Icon from 'antd/lib/icon';
import { Link } from 'react-router';

import React from 'react';
import 'antd/dist/antd.css'

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
    this.setState({
      collapse: !this.state.collapse,
    })
  },
  render() {
    const collapse = this.state.collapse;
    return (
      <AsideDiv>
        <AsideSider>
          <AsideLogo></AsideLogo>
          <ASMenu mode="inline" theme="dark" defaultSelectedKeys={['user']}>
            <SubMenu key="user" title={<ASMNavText><ASMIIcon type="user"></ASMIIcon><ASMNavText>用户管理</ASMNavText></ASMNavText>}>
              <ASMItem key="user-list">
                <Link to="/manageUser"><ASMNavText>用户列表</ASMNavText></Link>
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
            {collapse ? <Icon type="right" /> : <Icon type="left" />}
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
              {React.Children.toArray(this.props.children)}
            </AsideContent>
          </AsideContainer>
          <AsideFooter>
            Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
          </AsideFooter>
        </AsideMain>
      </AsideDiv>
    );
  },
});


export default AsideCollapse;

