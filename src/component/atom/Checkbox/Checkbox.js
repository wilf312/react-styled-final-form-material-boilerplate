import React from 'react'
import CheckboxUI from 'material-ui/Checkbox'

class Checkbox extends React.Component {
  render () {
    const {
      dataList,
      value,
      disabled,
      onCheck
    } = this.props
    return <div>
      {dataList && dataList.map((d) => {
        const {label} = d
        return <CheckboxUI
          label={label}
          key={label}
          disabled={disabled || d.disabled}
          checked={label === value}
          onCheck={onCheck}
        />
      })}
    </div>
  }
}

export default Checkbox
