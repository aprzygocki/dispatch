import React from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayClick(day) {
    this.setState({ selectedDay: day });
  }

  render() {
    return (
      <div>
        {this.state.selectedDay ? (
          <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
        ) : (
          <p>Please select a start day.</p>
        )}
        <DayPicker
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDay}
          firstDayOfWeek={ 0 }
          disabledDays={
            [
              { daysOfWeek: [] },
              { before: new Date()}
            ]
          }
        />
        </div>
    );
  }
}

