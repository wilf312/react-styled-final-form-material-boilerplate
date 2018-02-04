import React from 'react'
import ToggleUI from 'material-ui/Toggle'

class Toggle extends React.Component {
  render () {
    const {
      defaultValue,
      hintText,
      disabled,
      onBlur,
      onChange
    } = this.props
    return <ToggleUI
      defaultToggled={defaultValue}
      hintText={hintText}
      disabled={disabled}
      
    />
  }
}

export default Toggle
