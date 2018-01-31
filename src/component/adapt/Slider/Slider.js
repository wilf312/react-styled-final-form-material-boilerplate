import React from 'react'
import Slider from 'atom/Slider'

export default ({input, meta, initialValue}) => (
  <Slider
    onChange={(e, val) => {
      input.onChange(val)
    }}
    initialValue={initialValue}
    min={1}
    max={100}
    step={1}
  />
)
