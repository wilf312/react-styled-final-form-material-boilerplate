import React from 'react'
import TimePickerUI from 'material-ui/TimePicker'

class TimePicker extends React.Component {
  render () {
    const {
      labelText,
      disabled,
      checked,
      onCheck
    } = this.props
    return <TimePickerUI
      label={labelText}
      key={labelText}
      disabled={disabled}
      checked={checked}
      onCheck={onCheck}
    />
  }
}

export default TimePicker
