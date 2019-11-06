import React from 'react';

class SideBar extends React.Component{
  render(){
    return(
      <div className="sidebar">
        <p style={{fontSize: '22px'}}>Dairy app</p>
        <span style={{color: '#808080', fontSize: '18px'}}>Comment with no sense</span>
      </div>
    )
  }
}

export default SideBar;
