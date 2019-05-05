import React, { Component } from 'react';
import './MainPage.css';
import MainTabs from './Components/MainTabs';

const axios = require('axios');

function LogVisitor(){axios.get('https://json.geoiplookup.io/api').then(function (response) { 
  axios.get(`http://localhost:4000/dbLogVisitor/VisitorIP/${response.data.ip}/VisitorCountry/${response.data.country_name}/Region/${response.data.region}/City/${response.data.city}`);
}) 
}



class MainPage extends Component {
  constructor(props){
    LogVisitor();
    super(props);
    this.state = {
    }
  
  }

  
  render() {
    return (
      <div>
<MainTabs/>

      </div>

    );
  }
}

export default MainPage;
