import React, { Component } from 'react';
import '../MainPage.css';
import { Typography, Paper } from '@material-ui/core';
import githubImage from '../../Images/gh.png';


class SubSoftware extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  
  }

  render() {
    return (
      <div>
        <center>
         <img src={this.props.imageLocation} height="400" width="400"/>
         <br/>
          <Typography variant='h4'>{this.props.programTitle}</Typography>
          <Typography variant='h6'>Language(s): {this.props.language}</Typography>
          <Typography variant='subtitle1'>{this.props.description}</Typography>
          <br/>
          <Typography variant='subtitle2'><a href={this.props.linkToLatest}>{this.props.linkToLatestText}</a></Typography>
          <br/>
          <a href={this.props.githubLocation} target='_blank'>
          <img src={githubImage} height="70" width="50"/>
          </a>
          </center>
      </div>

    );
  }
}

export default SubSoftware;
