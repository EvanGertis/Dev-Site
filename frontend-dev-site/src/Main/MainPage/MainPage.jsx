import React, { Component } from 'react';
import './MainPage.css';

class MainPage extends Component {
  render() {
    return (
      
      <div className="MainPage">
       <hr />
        <span class="main_title">Title</span>
        <br /><br />

        <p class="normal_text">
            Test
        </p>
        <p class="normal_text">
            Test2
        </p>
        <p class="normal_text">
            Test3
        </p>



        <br />
        <p class="normal_text">
            Contact: <a href="mailto:aaprather@augusta.edu">AAPRATHER@augusta.edu</a>
        </p>
        <br /><br />


        <hr />
      </div>
    );
  }
}

export default MainPage;
