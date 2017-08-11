/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

// import React from 'react';
// import Helmet from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
//
// import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
// import H2 from 'components/H2';
// import ReposList from 'components/ReposList';
// import AtPrefix from './AtPrefix';
// import CenteredSection from './CenteredSection';
// import Form from './Form';
// import Input from './Input';
// import Section from './Section';
// import messages from './messages';
// import DatePicker from 'antd/lib/date-picker';
// import message  from 'antd/lib/message'
// import { loadRepos } from '../App/actions';
// import { changeUsername } from './actions';
// import { makeSelectUsername } from './selectors';
//
// export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
//   constructor(props){
//     super(props);
//     this.state = {
//       date: '',
//     };
//   }
//   /**
//    * when initial state username is not null, submit the form to load repos
//    */
//   componentDidMount() {
//     if (this.props.username && this.props.username.trim().length > 0) {
//       this.props.onSubmitForm();
//     }
//   }
//
//   handleChange(date) {
//     message.info('您选择的日期是: ' + date.toString());
//     this.setState({ date });
//   }
//
//   render() {
//     const { loading, error, repos } = this.props;
//     const reposListProps = {
//       loading,
//       error,
//       repos,
//     };
//
//     return (
//       <article>
//         <Helmet
//           title="Home Page"
//           meta={[
//             { name: 'description', content: 'A React.js Boilerplate application homepage' },
//           ]}
//         />
//         <div>
//           <CenteredSection>
//             <H2>
//               <FormattedMessage {...messages.startProjectHeader} />
//             </H2>
//             <p>
//               <FormattedMessage {...messages.startProjectMessage} />
//             </p>
//           </CenteredSection>
//           <Section>
//             <H2>
//               <FormattedMessage {...messages.trymeHeader} />
//             </H2>
//             <Form onSubmit={this.props.onSubmitForm}>
//               <label htmlFor="username">
//                 <FormattedMessage {...messages.trymeMessage} />
//                 <AtPrefix>
//                   <FormattedMessage {...messages.trymeAtPrefix} />
//                 </AtPrefix>
//                 <Input
//                   id="username"
//                   type="text"
//                   placeholder="mxstbr"
//                   value={this.props.username}
//                   onChange={this.props.onChangeUsername}
//                 />
//               </label>
//             </Form>
//             <ReposList {...reposListProps} />
//           </Section>
//         </div>
//         <div style={{width: 400, margin: '100px auto'}}>
//           <DatePicker onChange={value=>this.handleChange(value)}/>
//           <div style={{marginTop:20}}>当前日期: {this.state.date.toString()}</div>
//         </div>
//       </article>
//     );
//   }
// }
//
// HomePage.propTypes = {
//   loading: React.PropTypes.bool,
//   error: React.PropTypes.oneOfType([
//     React.PropTypes.object,
//     React.PropTypes.bool,
//   ]),
//   repos: React.PropTypes.oneOfType([
//     React.PropTypes.array,
//     React.PropTypes.bool,
//   ]),
//   onSubmitForm: React.PropTypes.func,
//   username: React.PropTypes.string,
//   onChangeUsername: React.PropTypes.func,
// };
//
// export function mapDispatchToProps(dispatch) {
//   return {
//     onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
//     onSubmitForm: (evt) => {
//       if (evt !== undefined && evt.preventDefault) evt.preventDefault();
//       dispatch(loadRepos());
//     },
//   };
// }
//
// const mapStateToProps = createStructuredSelector({
//   repos: makeSelectRepos(),
//   username: makeSelectUsername(),
//   loading: makeSelectLoading(),
//   error: makeSelectError(),
// });
//
// // Wrap the component to inject dispatch and state into it
// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);


import Menu from 'antd/lib/menu';
import Breadcrumb from 'antd/lib/breadcrumb';
import Icon from 'antd/lib/icon';

import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const AsideDiv = styled.div`
  position: relative;
  min-height: 100%;
`;

const AsideDivLogo = styled(AsideDiv)`
  width: 150px;
  height: 32px;
  background: #333;
  border-radiux: 6px;
  margin: 16px 24px 16px 28px;
  transition: all 0.3 ease;
`;


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
        <AsideDiv className={collapse ? "ant-layout-aside ant-layout-aside-collapse" : "ant-layout-aside"}>
          <aside className="ant-layout-sider">
            <AsideDivLogo />
            <Menu mode="inline" theme="dark" defaultSelectedKeys={['user']}>
              <Menu.Item key="user">
                <Icon type="user" /><span className="nav-text">导航一</span>
              </Menu.Item>
              <Menu.Item key="setting">
                <Icon type="setting" /><span className="nav-text">导航二</span>
              </Menu.Item>
              <Menu.Item key="laptop">
                <Icon type="laptop" /><span className="nav-text">导航三</span>
              </Menu.Item>
              <Menu.Item key="notification">
                <Icon type="notification" /><span className="nav-text">导航四</span>
              </Menu.Item>
              <Menu.Item key="folder">
                <Icon type="folder" /><span className="nav-text">导航五</span>
              </Menu.Item>
            </Menu>
            <div className="ant-aside-action" onClick={this.onCollapseChange}>
              {collapse ? <Icon type="right" /> : <Icon type="left" />}
            </div>
          </aside>
          <div className="ant-layout-main">
            <div className="ant-layout-header"></div>
            <div className="ant-layout-breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>应用列表</Breadcrumb.Item>
                <Breadcrumb.Item>某应用</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="ant-layout-container">
              <div className="ant-layout-content">
                <div style={{ height: 220 }}>
                  内容区域
                </div>
              </div>
            </div>
            <div className="ant-layout-footer">
              Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
            </div>
          </div>
        </AsideDiv>
    );
  },
});

export default AsideCollapse;


