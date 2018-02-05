import React from 'react'
import SelectField from 'atom/SelectField'

export default ({input, meta, dataList}) => (
  <SelectField
    label={'IceCream'}
    disabled={false}
    dataList={dataList}
    value={input.value}
    errorText={meta.touched ? meta.error : ''}
    onChange={(e, index, value) => {
      input.onBlur()
      input.onChange(value)
    }}
  />
)
