import React from 'react'
import ToggleUI from 'material-ui/Toggle'

class Toggle extends React.Component {
  render () {
    const {
      input: { onChange, value },
      label
    } = this.props
    return <ToggleUI
      label={label}
      toggled={!!value}
      onToggle={(event, isInputChecked) => onChange(isInputChecked)}
    />
  }
}

export default Toggle
