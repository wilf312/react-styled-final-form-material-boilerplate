import React from 'react'
import DatePickerUI from 'material-ui/DatePicker'

class DatePicker extends React.Component {
  render () {
    const {
      value,
      hintText,
      autoOk,
      disabled,
      onChange,
      openToYearSelection
    } = this.props
    return (<DatePickerUI
      value={value}
      hintText={hintText}
      autoOk={autoOk}
      disabled={disabled}
      onChange={onChange}
      openToYearSelection={openToYearSelection}
    />)
  }
}

export default DatePicker
