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
    dataList={dataList}
    disabled={disabled}
    value={input.value}
  />
)
