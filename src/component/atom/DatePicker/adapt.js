import React from 'react'
import DatePicker from './DatePicker'

export default ({
    input,
    meta,
    labelText,
    disabled,
    autoOk,
    openToYearSelection
  }) => (<DatePicker
    value={input.value}
    hintText={labelText}
    disabled={disabled}
    autoOk={autoOk}
    openToYearSelection={openToYearSelection}
    onChange={(e, value, b) => {
      input.onChange(value)
    }}
  />
)
