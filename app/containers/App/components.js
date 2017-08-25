/**
 * Created by baichenchen on 2017/8/13.
 */

import styled from 'styled-components';

export const sizes = {
    desktop: 1060,
    tablet: 768,
    phone: 414,
};


export const StyledDiv = styled.div`
  
  @media (max-width: ${sizes.desktop}px) {
    background: palevioletred;
    
  }
  
  @media (max-width: ${sizes.tablet}px) {
    background: mediumseagreen;
  }
  
  @media (max-width: ${sizes.phone}px) {
    background: dodgerblue;
  }
  
`;
