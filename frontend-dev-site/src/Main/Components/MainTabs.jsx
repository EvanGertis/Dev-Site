import React, { Component } from 'react';
import '../MainPage.css';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ComputerIcon from '@material-ui/icons/Computer';
import PersonIcon from '@material-ui/icons/Person';
import Software from './Software';
class MainTabs extends Component {
  constructor(props){
    super(props);
  }

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  
  render() {
    return (
      <div>
<Paper square>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab icon={<ComputerIcon />} label="Software & Development" />
          <Tab icon={<PersonIcon />} label="About" />
        </Tabs>
      </Paper>
{
    this.state.value === 0 ? <Software/> : ''
}
      </div>

    );
  }
}

export default MainTabs;
