/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */


import React from 'react';
import { StyledDiv } from './components'

class App extends React.Component {

  render() {
    return (
        <StyledDiv>
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <meta name="HandheldFriendly" content="true"/>
          {React.Children.toArray(this.props.children)}
        </StyledDiv>
    )
  }
}

export default App;
