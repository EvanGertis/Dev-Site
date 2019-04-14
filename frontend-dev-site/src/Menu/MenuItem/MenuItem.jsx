import React, { Component } from 'react';
import './MenuItem.css';


class MenuItem extends Component {
  render() {
    return (
      
        
        <div class="menu_cat2">
            <img src={this.props.imageLocation} width="16" height="16" />
            <a href={this.props.linkLocation}>{this.props.name}</a><br /><br />

        </div>

     
    );
  }
}

export default MenuItem;
