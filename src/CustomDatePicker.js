import React from 'react';
import DatePicker from 'material-ui/DatePicker';

class CustomDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
    };
  }

  handleStartDateChange = (event, date) => {
    this.setState({ startDate: date });
  };

  handleEndDateChange = (event, date) => {
    this.setState({ endDate: date });
  };

  render() {
    return (
      <div>
        <DatePicker
          hintText="Select start date"
          value={this.state.startDate}
          onChange={this.handleStartDateChange}
        />
        <DatePicker
          hintText="Select end date"
          value={this.state.endDate}
          onChange={this.handleEndDateChange}
          shouldDisableDate={date => date <= this.state.startDate}
        />
      </div>
    );
  }
}

export default CustomDatePicker;
