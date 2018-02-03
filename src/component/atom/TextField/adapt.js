import React from 'react'
import TextField from './TextField'

export default ({
    input,
    meta,
    defaultValue,
    hintText,
    errorText,
    disabled,
    floatingLabelText,
    floatingLabelFixed
  }) => (<TextField
    onChange={(e, val) => {
      input.onChange(val)
    }}
    onBlur={() => {
      input.onBlur()
    }}
    defaultValue={defaultValue}
    hintText={hintText}
    errorText={meta.touched ? meta.error : ''}
    disabled={disabled}
    floatingLabelText={floatingLabelText}
    floatingLabelFixed={floatingLabelFixed}
  />
)
