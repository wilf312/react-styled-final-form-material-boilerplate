import React from 'react'
import DatePickerUI from 'material-ui/DatePicker'

class DatePicker extends React.Component {
  render () {
    const {
      labelText,
      disabled,
      checked,
      onCheck
    } = this.props
    return <DatePickerUI
      label={labelText}
      key={labelText}
      disabled={disabled}
      checked={checked}
      onCheck={onCheck}
    />
  }
}

export default DatePicker
