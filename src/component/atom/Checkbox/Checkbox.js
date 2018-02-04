import React from 'react'
import CheckboxUI from 'material-ui/Checkbox'

class Checkbox extends React.Component {
  render () {
    const {
      checked,
      disabled,
      labelText,
      onBlur,
      onChange
    } = this.props
    return <CheckboxUI
      label={labelText}
      disabled={disabled}
      checked={checked}
      onCheck={onChange.bind(this)}
    />


  }
}

export default Checkbox
