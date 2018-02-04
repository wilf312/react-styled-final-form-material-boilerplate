import React from 'react'
import Toggle from './Toggle'

export default ({
    input,
    meta,
    defaultValue,
    hintText,
    errorText,
    disabled,
    floatingLabelText,
    floatingLabelFixed
  }) => (<Toggle
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
