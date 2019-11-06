import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const SideBarWrapper = styled.div`
  width: 20%;
  height: 100%;
  background-color: #2b2f3e;
  color: white;
  padding-top: 20px;
  padding-left: 20px;
`;
class SideBar extends React.Component{
  render(){
    return(
      <SideBarWrapper>
        <p style={{fontSize: '22px'}}>Dairy app</p>
        <span style={{color: '#808080', fontSize: '18px'}}>Comment with no sense</span>
      </SideBarWrapper>
    )
  }
}

export default SideBar;
