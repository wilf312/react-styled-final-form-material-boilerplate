import React from 'react'
import DatePicker from './DatePicker'

export default ({
    input,
    meta,
    labelText,
    disabled
  }) => (<DatePicker
    labelText={labelText}
    component={DatePicker}
    disabled={disabled}
    checked={input.checked}
    onCheck={(e) => {
      input.onChange(e)
    }}
  />
)
