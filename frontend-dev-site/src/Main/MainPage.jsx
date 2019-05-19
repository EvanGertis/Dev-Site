import React, { Component } from 'react';
import './MainPage.css';
import MainTabs from './Components/MainTabs';
var querystring = require('querystring');
const axios = require('axios');

function LogVisitor() {
  axios.get('https://json.geoiplookup.io/api').then(function (response) {
    axios.post('http://localhost:4000/dbLog/logVisitor',
      querystring.stringify({
        IPAddress: `${response.data.ip}`,
        Country: `${response.data.country_name}`,
        Region: `${response.data.region}`,
        City: `${response.data.city}`
      }), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
  })
};



class MainPage extends Component {
  constructor(props) {
    LogVisitor();
    super(props);
    this.state = {
    }

  }


  render() {
    return (
      <div>
        <MainTabs />

      </div>

    );
  }
}

export default MainPage;
