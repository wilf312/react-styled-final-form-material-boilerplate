import React from 'react'
import TimePickerUI from 'material-ui/TimePicker'

class TimePicker extends React.Component {
  render () {
    const {
      value,
      onChange,
      disabled,
      autoOk,
      format,
      hintText
    } = this.props
    return <TimePickerUI
      value={value}
      onChange={onChange}
      disabled={disabled}
      autoOk={autoOk}
      format={format}
      hintText={hintText}
    />
  }
}

export default TimePicker
