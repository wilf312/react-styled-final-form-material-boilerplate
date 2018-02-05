import React from 'react'
import Styled from 'styled-components'
import { Field } from 'react-final-form'
import {composeValidators, required, basicLatin, checkIceCream} from 'src/component/util/validation'

import TextField from 'atom/TextField/adapt'
import Toggle from 'atom/Toggle/adapt'
import SelectField from 'atom/SelectField/adapt'
import Slider from 'adapt/Slider'
import Checkbox from 'atom/Checkbox/adapt'
import DatePicker from 'atom/DatePicker/adapt'
import TimePicker from 'atom/TimePicker/adapt'

const dataSet = {
  SelectField: [
    {label: 'Chocolate', value: 1},
    {label: 'Vanilla', value: 2},
    {label: 'Cosmic taste ', value: -1}
  ]
}

export default () => (
  <StyledSection>
    <Title>third party</Title>

    <h3>TimePicker</h3>
    <Field
      name='TimePicker'
      hintText='TimePicker'
      disabled={false}
      autoOk
      component={TimePicker}
    />

    <h3>DatePicker</h3>
    <Field
      name='DatePicker'
      hintText='DatePicker'
      disabled={false}
      autoOk
      openToYearSelection
      component={DatePicker}
    />

    <h3>SelectField</h3>
    <Field
      name='SelectField'
      component={SelectField}
      dataList={dataSet.SelectField}
      validate={composeValidators(checkIceCream)}
    />

    <h3>Slider</h3>
    <Field name='Slider' component={Slider} />

    <h3>Text</h3>
    <Field
      name='TextField'
      component={TextField}
      validate={composeValidators(required, basicLatin)}
      hintText={'john titor'}
      disabled={false}
      floatingLabelText={'名前'}
      floatingLabelFixed
    />

    <h3>Checkbox</h3>

    {[{
      label: 'Frontend developer',
      disabled: false
    }, {
      label: 'Backend developer',
      disabled: false
    }, {
      label: 'UI design',
      disabled: true
    }].map(({label, disabled}) => {
      return <Field
        name='Checkbox'
        type='checkbox'
        labelText={label}
        value={label}
        key={label}
        component={Checkbox}
        disabled={disabled}
      />
    })}

    <h3>Toggle</h3>
    <Field
      name='Toggle'
      label={'Switch'}
      disabled={false}
      component={Toggle}
    />
  </StyledSection>
)

const StyledSection = Styled.section`
  width: 100%;
  padding: 10px;
  margin-bottom: 30px;
  border: solid 1px #f0f0f0;
`

const Title = Styled.h2`
  border-bottom: solid 3px;
  padding-bottom: 3px;
`
