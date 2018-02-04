import React from 'react'
import TimePicker from './TimePicker'

export default ({
    input,
    meta,
    labelText,
    disabled
  }) => (<TimePicker
    labelText={labelText}
    component={TimePicker}
    disabled={disabled}
    checked={input.checked}
    onCheck={(e) => {
      input.onChange(e)
    }}
  />
)
