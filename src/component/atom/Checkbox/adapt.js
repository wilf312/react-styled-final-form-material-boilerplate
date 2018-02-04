import React from 'react'
import Checkbox from './Checkbox'

export default ({
    input,
    meta,
    defaultValue,
    hintText,
    errorText,
    disabled,
    dataList,
    floatingLabelText,
    floatingLabelFixed
  }) => (<Checkbox
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
    labelText={dataList[0]}
  />
)
