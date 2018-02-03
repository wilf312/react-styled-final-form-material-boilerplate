import React from 'react'
import TextFieldUI from 'material-ui/TextField'

class TextField extends React.Component {
  render () {
    const {
      defaultValue,
      hintText,
      errorText,
      disabled,
      floatingLabelText,
      floatingLabelFixed,
      onBlur,
      onChange
    } = this.props
    return <TextFieldUI
      defaultValue={defaultValue}
      hintText={hintText}
      errorText={errorText}
      disabled={disabled}
      floatingLabelText={floatingLabelText}
      floatingLabelFixed={floatingLabelFixed}
      onBlur={onBlur}
      onChange={onChange}
    />
  }
}

export default TextField
