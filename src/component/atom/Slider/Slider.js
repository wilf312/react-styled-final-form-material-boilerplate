import React from 'react'
import SliderUI from 'material-ui/Slider'

class Slider extends React.Component {
  render () {
    const {
      onChange,
      min,
      max,
      step
    } = this.props
    return <SliderUI
        onChange={onChange}
        min={min}
        max={max}
        step={step}
      />
  }
}

export default Slider


