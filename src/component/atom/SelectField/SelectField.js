import React from 'react'
import SelectUI from 'material-ui/Select'
import { MenuItemUI } from 'material-ui/Menu'

class Select extends React.Component {
  render () {
    const {
      dataList,
      disabled,
      label,
      value,
      errorText,
      onChange
    } = this.props
    return <SelectUI
      floatingLabelText={label}
      disabled={disabled}
      errorText={errorText}
      value={value}
      onChange={onChange}
    >
      {dataList.map(({value, label}) => {
        return <MenuItemUI value={value} key={value}>{label}</MenuItemUI>
      })}
    </SelectUI>
  }
}

export default Select
