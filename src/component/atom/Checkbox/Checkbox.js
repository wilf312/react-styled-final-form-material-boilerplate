import React from 'react'
import CheckboxUI from 'material-ui/Checkbox'

class Checkbox extends React.Component {
  render () {
    const {
      labelText,
      disabled,
      checked,
      onCheck
    } = this.props
    return <CheckboxUI
      label={labelText}
      key={labelText}
      disabled={disabled}
      checked={checked}
      onCheck={onCheck}
    />
  }
}

export default Checkbox
