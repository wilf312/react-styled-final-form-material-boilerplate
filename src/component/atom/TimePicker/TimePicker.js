import React from 'react'
import TimePickerUI from 'material-ui/TimePicker'

class TimePicker extends React.Component {
  render () {
    const {
    } = this.props
    return <TimePicker
      disabled={false}
      format='24hr'
      hintText='Disabled TimePicker'
    />
  }
}

export default TimePicker
