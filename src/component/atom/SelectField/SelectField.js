import React from 'react'
import SelectFieldUI from 'material-ui/SelectField'
import MenuItemUI from 'material-ui/MenuItem'

class SelectField extends React.Component {
  render () {
    const {
      dataList,
      disabled,
      label,
      value,
      errorText,
      onChange
    } = this.props
    return <SelectFieldUI
      floatingLabelText={label}
      disabled={disabled}
      errorText={errorText}
      value={value}
      onChange={onChange}
    >
      {dataList.map(({value, label}) => {
        return <MenuItemUI value={value} key={value} primaryText={label} />
      })}
    </SelectFieldUI>
  }
}

export default SelectField
