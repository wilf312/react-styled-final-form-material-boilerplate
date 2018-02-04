import React from 'react'
import Styled from 'styled-components'
import { Field } from 'react-final-form'
import {composeValidators, required, basicLatin, checkIceCream} from 'src/component/util/validation'

import TextField from 'atom/TextField/adapt'
import Toggle from 'atom/Toggle/adapt'
import SelectField from 'atom/SelectField/adapt'
import Slider from 'adapt/Slider'
import Checkbox from 'atom/Checkbox/adapt'

export default () => (
  <StyledSection>
    <h2>third party</h2>
    <h3>SelectField</h3>
    <Field
      name='SelectField'
      component={SelectField}
      value={values.SelectField}
      dataList={dataSet.SelectField}
      validate={composeValidators(checkIceCream)}
    />

    <h3>Slider</h3>
    <Field name='Slider' component={Slider} initialValue={values.Slider} />

    <h3>Text</h3>
    <Field
      name='TextField'
      component={TextField}
      validate={composeValidators(required, basicLatin)}
      defaultValue={values.TextField}
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
      label={'名前'}
      disabled={false}
      defaultValue={values.Toggle}
      component={Toggle}
    />
  </StyledSection>
)

const StyledSection = Styled.section`
  padding: 10px;
  margin-bottom: 30px;
  border: solid 1px #f0f0f0;
`
