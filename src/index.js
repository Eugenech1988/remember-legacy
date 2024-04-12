import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CustomDatePicker from './CustomDatePicker';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    {/*<div/>*/}
    <CustomDatePicker/>
  </MuiThemeProvider>,
  document.getElementById('root')
);