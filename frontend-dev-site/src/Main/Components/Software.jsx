import React, { Component } from 'react';
import '../MainPage.css';
import { Typography, Paper, Grid } from '@material-ui/core';
import SubSoftware from './SubSoftware';
import PRATHToolImage from '../../Images/PRATHTOOL_1.png';


class Software extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }


  render() {
    return (
      <div>
        <br />
        <Paper>
          <center><Typography variant='h5'>Welcome to the Software & Development tab!</Typography></center>
          <br />
          <Grid container>

            <Grid item xs={4}>
              <SubSoftware imageLocation={PRATHToolImage} programTitle='PRATHTool' githubLocation='https://github.com/aaprather/PRATHTool' language='C++ CLR' description='Random interval mouse clicker and key presser. Includes a shutdown timer. General purpose & Windows only.' linkToLatest='https://github.com/aaprather/PRATHTool/blob/master/PRATHTool.exe' linkToLatestText='Download Latest Version' />
            </Grid>


          </Grid>


        </Paper>

      </div>

    );
  }
}

export default Software;
