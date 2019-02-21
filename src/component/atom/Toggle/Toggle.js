import React from 'react'
import SwitchUI from 'material-ui/Switch'

class Switch extends React.Component {
  render () {
    const {
      input: { onChange, value },
      label
    } = this.props
    return <SwitchUI
      checked={!!value}
      onChange={(event, isInputChecked) => onChange(isInputChecked)}
    />
  }
}

export default Switch
