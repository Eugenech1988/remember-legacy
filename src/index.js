import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CustomDatePicker from './CustomDatePicker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <div className='datepicker-wrapper'>
      <CustomDatePicker/>
    </div>
  </MuiThemeProvider>,
  document.getElementById('root')
);