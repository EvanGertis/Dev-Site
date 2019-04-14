import React, { Component } from 'react';
import './MenuBar.css';
import MenuItem from '../MenuItem/MenuItem';
import MenuSubTitle from '../MenuSubTitle/MenuSubTitle';
import logo from '../../Images/testMenuItemImage1.png';

class MenuBar extends Component {
  render() {
var componentList=[
<MenuItem imageLocation={logo} name='TestName' linkLocation='http://google.com'/>
];
    return (
      
      <div className="MenuBar">
        <p class="menu_title"><a href="">Home</a></p>
        <MenuSubTitle name='Devd softwares' listItems={componentList}/>
      </div>
    );
  }
}

export default MenuBar;
