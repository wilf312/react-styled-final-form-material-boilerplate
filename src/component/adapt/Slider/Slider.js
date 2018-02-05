import React from 'react'
import Slider from 'atom/Slider'

export default ({input, meta}) => (
  <Slider
    onChange={(e, val) => {
      input.onChange(val)
    }}
    initialValue={input.value}
    min={1}
    max={100}
    step={1}
  />
)
