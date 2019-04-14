import React, { Component } from 'react';
import './MenuSubTitle.css';


class MenuSubTitle extends Component {
  render() {



    return (
      
      <div>
        <p class="menu_cat1">
            {this.props.name}
        </p>
        
          {this.props.listItems}
        </div>
        

     
    );
  }
}

export default MenuSubTitle;
