import React from 'react'
import SliderUI from 'material-ui/Slider'

class Slider extends React.Component {
  render () {
    const {
      initialValue,
      onChange,
      min,
      max,
      step
    } = this.props
    return <SliderUI
      defaultValue={initialValue}
      onChange={onChange}
      min={min}
      max={max}
      step={step}
    />
  }
}

export default Slider
