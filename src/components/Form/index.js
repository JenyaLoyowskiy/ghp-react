import React from 'react';
import Items from '../Items';
import SideBar from '../Sidebar';

const Form = ()=>(
  <div style={{display: 'flex', height: '100%'}}>
    <SideBar/>
    <Items/>
  </div>
)

export default Form;
