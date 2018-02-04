import React from 'react'
import Checkbox from './Checkbox'

export default ({
    input,
    meta,
    labelText,
    disabled
  }) => (<Checkbox
    labelText={labelText}
    component={Checkbox}
    disabled={disabled}
    checked={input.checked}
    onCheck={(e) => {
      input.onChange(e)
    }}
  />
)
