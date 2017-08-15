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


import React from 'react';
import 'antd/dist/antd.css'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';

import LoginPage from '../LoginPage'
import ManagePage from '../ManagePage'

import { makeSelectLogin } from './selectors'

class AsideCollapse extends React.Component {

  constructor(){
    super();
    // if (this.props.isLogin){
    //   browserHistory.push('/manage');
    // }
  }

  componentDidMount(){
    console.log('component did mount - - - ');
    if (this.props.isLogin){
      browserHistory.push('/manage');
    }else {
      browserHistory.push('/');
    }
  }

  render() {
    if (this.props.isLogin) {
      return <ManagePage nodeChildren={React.Children.toArray(this.props.children)}/>
    }else {
      return <LoginPage/>;
    }
  }
}

AsideCollapse.propTypes = {
  isLogin: React.PropTypes.bool,
};


const mapStateToProps = createStructuredSelector({
  isLogin: makeSelectLogin(),
});

export default connect(mapStateToProps)(AsideCollapse);

