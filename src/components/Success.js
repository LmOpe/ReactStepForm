import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Success" />
            <h1>Thank You For Registering</h1>
            <p>We shall contact You for further Instructions</p>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Success
