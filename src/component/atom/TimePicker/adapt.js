import React from 'react'
import TimePicker from './TimePicker'

export default ({
    input,
    meta,
    labelText,
    autoOk,
    disabled
  }) => (<TimePicker
    labelText={labelText}
    autoOk={autoOk}
    disabled={disabled}
    onChange={(e, date) => {
      input.onChange(date)
    }}
  />
)
